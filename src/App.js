import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
import "./index.css";

function App() {
  const [courses, setCourses] = useState(''); // Initialize as an empty object [] or null empty and api crash
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  console.log("category", category);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-bgDark2">
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
