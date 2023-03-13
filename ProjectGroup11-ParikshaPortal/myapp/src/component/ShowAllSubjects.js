import React  from "react";
import CourseDetails from "./course";
import {useState,useEffect} from 'react';
import subjectService from "../service/subject_service";
import { Table,Button } from 'reactstrap';

function ShowAllSubjects(){
    const [courseId, setCourseId] = useState();
    const [subject, setSubject] = useState([]);
    let HandleCourseId=(newCourseID)=>{
        console.log("Course ID came From Course in ShowAllSubjects "+newCourseID);
        setCourseId(newCourseID);
        }
        const init = () => {
            subjectService
              .getAllSubjectByCourse(courseId)
              .then((response) => {
                setSubject(response.data);
              })
              .catch((error) => {
                console.log("Something went wrong in subject", error);
              });
          };
        
          useEffect(() => {
            init();
          }, [courseId]);

return(<div>
    <h4>Subjects</h4>
    <CourseDetails onCourseIDChange={HandleCourseId}/>
    <Table striped>
  <thead>
    <tr>
      <th>
      Subject ID
      </th>
      <th>
        Subject Name
      </th>
       <th>
        Action
      </th>
    </tr>
  </thead>
  <tbody>
    {subject.map((value,index)=>(
    <tr key={index}>
   <td>{value.id}</td>
   <td>{value.subjectName}</td>
   <td><Button color="danger">Delete</Button></td>
    </tr>
    ))}
 </tbody>
</Table>

</div>)
}
export default ShowAllSubjects;