import React, { useState } from 'react'
import Card from "./Card.js"
const Cards = ({ courses, category }) => {
    const [likedcourses, setLikedCourses] = useState([]);
    let allCourses = [];
    const getCourses = () => {
        if (category === "All") {
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((courses) => {
                    allCourses.push(courses);
                })
            })
            // with array
            console.log(allCourses, "allCourses");
            return allCourses;
        } else {
            return courses[category];
        }

    }
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {getCourses().map((course) => {
                return (
                    <Card key={course.id} course={course} likedcourses={likedcourses} setLikedCourses={setLikedCourses} />
                );
            })}
        </div>
    )
}

export default Cards
