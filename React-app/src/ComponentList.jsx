import React, { useState } from "react";
import Courses from "./Courses.jsx";
import html from './assets/html.jpg';

function ComponentList() {
  const [courses,setCourses] = useState([
    {
      id: 1,
      course: "HTML",
      statement: "HTML Course for a very lower price",
      image: html,
      show: true,
    }, 
    {
      id: 2,
      course: "CSS",
      statement: "CSS Course for a very lower price",
      image: html,
      show: true,
    },
    {
      id: 3,
      course: "JavaScript",
      statement: "JavaScript Course for a very lower price",
      image: html,
      show: true,
    },
     {
      id: 4,
      course: "react",
      statement: "React Course for a very lower price",
      image: html,
      show: true,
    }
  ]);

  function deleteCourse(id){
    setCourses( courses.filter((course)=> course.id!==id));
  }


  return (
    <>
      {courses.map((item) => (
        <Courses
          key={item.id}
          course={item.course}
          statement={item.statement}
          image={item.image}
          show={item.show}
          delete={deleteCourse}
          id={item.id}
        />
      ))}
    </>
  );
}

export default ComponentList;
