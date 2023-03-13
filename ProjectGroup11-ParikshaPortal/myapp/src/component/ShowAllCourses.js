import React from 'react';
import { Table,Button } from 'reactstrap';
import courseService from "../service/course_service";

import { useEffect, useState } from "react";

function ShowAllCourses(){
    const [course, SetCourse] = useState([]);

    const init = () => {
        courseService
          .getAllCourses()
          .then((response) => {
            SetCourse(response.data);
            
          })
          .catch((error) => {
            console.log("Something went wrong", error);
          });
        };
    
        useEffect(() => {
          init();
        },[]);
        console.log(course);

    return(
        <div>
            <h4 >Courses</h4>
           <Table striped>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Course Name
      </th>
       <th>
        Action
      </th>
    </tr>
  </thead>
  <tbody>
    {course.map((value,index)=>(
    <tr key={index}>
   <td>{value.id}</td>
   <td>{value.courseName}</td>
   <td><Button color="danger">Delete</Button></td>
    </tr>
    ))}
 </tbody>
</Table>
        </div>
    )
}
export default ShowAllCourses;