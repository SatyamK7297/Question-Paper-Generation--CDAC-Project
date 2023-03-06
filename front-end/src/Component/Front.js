import React, { useState } from 'react';

const Course = [
    {value : 1, label : "PG-DAC"},
    {value : 3, label : "PG-DITISS"}
]

const Subject = {
    1 : [
        {value : 1,label : "CPOS"},
        {value : 2,label : "ADS"},
        {value : 3,label : "DBT"},
        {value : 4,label : "WPT"},
        {value : 5,label : ".Net"},
        {value : 6,label : "ASDM"},
        {value : 7,label : "Web Based Java"},
        {value : 8,label : "Java with OOPS"}       
    ],
    3 : [
        {value : 9,label : "NDC"},
        {value : 10,label : "ITIL"},
        {value : 11,label : "FCN"},
        {value : 12,label : "COSA"},
        {value : 13,label : "Cyber-Forensics"},
        {value : 14,label : "Security Concepts"},
        {value : 15,label : "PKI"},      
    ]
};

function Front() {
const [selectedCourse,setSelectedCourse] = useState('');
const [selectedSubject,setSelectedSubject] = useState('');

const handleCourseChange = (event)=>{
    setSelectedCourse(event.target.value);
    setSelectedSubject('');
}
const handleSubjectChange = (event)=>{
    setSelectedSubject(event.target.value);
}

    return (
        <div>
        <label htmlFor="Course">Course:</label>
        <select id="Course" value={selectedCourse} onChange={handleCourseChange}>
        <option value="">Select a Course</option>
        {Course.map((option) => (
            <option key={option.value} value={option.value}>
            {option.label}
            </option>
        ))}
        </select>
        

        {selectedCourse && (
          <div>
          <label htmlFor="Subject">Subject:</label>
          <select id="Subject" value={selectedSubject} onChange={handleSubjectChange}>
          <option value="">Select a Subject</option>
          {Subject[selectedCourse].map((option) => (
              <option key={option.value} value={option.value}>
              {option.label}
              </option>
          ))}
          </select>
          </div>)
        }
        </div>
    );
}

export default Front;