import React from 'react';
import ShowAllCourses from './ShowAllCourses';
import ShowAllSubjects from './ShowAllSubjects';

function StudentHome(){
    return(<div>
        <ShowAllCourses/>
        <br/>
        <ShowAllSubjects/>
        
    </div>)
}
export default StudentHome;