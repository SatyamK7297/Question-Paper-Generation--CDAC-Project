import {useState} from "react";
const courseOptions = [
    { value: '1', label: 'PG-DAC' },
    { value: '2', label: 'PG-DITISS' }
  ];
  
  const subjectOptions = {
    1: [
      { value: '1', label: 'CPOS' },
      { value: '2', label: 'ADS' },
      { value: '3', label: 'DBT' },
      { value: '4', label: 'WPT' },
      { value: '5', label: 'MS.Net' },
      { value: '6', label: 'ASDM' },
      { value: '7', label: 'Web based Java' },
      { value: '8', label: 'Java with OOPS' },
    ],
    2: [
        { value: '9', label: 'NDC' },
        { value: '10', label: 'ITIL' },
        { value: '11', label: 'FCN' },
        { value: '12', label: 'COSA' },
        { value: '13', label: 'Cyber Forensics' },
        { value: '14', label: 'Security Concepts' },
        { value: '15', label: 'PKI' },
    ],
  };
  function Dropdown() {
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    let [flag,setFlag] = useState(0);
    let [question,setQuestion] = useState('');
    let [noOfQuestions,setNoOfQuestions] = useState('');
  
    const handleCourseChange = (event) => {
      setSelectedCourse(event.target.value);
      setSelectedSubject('');
    };
  
    const handleSubjectChange = (event) => {
      setSelectedSubject(event.target.value);
    };

    const handleChange = (event)=>{
        setNoOfQuestions(event.target.value);
    };

    const handleFlag=(event)=>{
        console.log(flag);
        if(flag === 0)
            setFlag(1);
        else
            setFlag(0);
        console.log(flag);
    };
  
    return (
      <div>
        <label htmlFor="course-select">Course:</label>
        <select id="course-select" value={selectedCourse} onChange={handleCourseChange}>
          <option value="">Select a Course</option>
          {courseOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
  
        {selectedCourse && (
          <div>
            <label htmlFor="subject-select">Subject:</label>
            <select id="subject-select" value={selectedSubject} onChange={handleSubjectChange}>
              <option value="">Select a subject</option>
              {subjectOptions[selectedCourse].map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
  
        {selectedCourse && selectedSubject && (
          <div>
            <p>Enter the number of questions: <input type="number" name="questionAmt" value={noOfQuestions} onChange={handleChange}/></p>
            <p><button type="button" onClick="">Generate Question Paper</button>&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" onClick={handleFlag}>Add Question to Database</button></p>
            <br/>
            <br/>
            {flag === 1?(
            <div>
            <span>Question text: </span>&nbsp;&nbsp;
            <input type="text" name="question" value={question.que}/>
            <br/>
            <br/>
            <span>Option A: </span>&nbsp;&nbsp;
            <input type="text" name="optionA" value={question.a}/>
            <br/>
            <br/>
            <span>Option B: </span>&nbsp;&nbsp;
            <input type="text" name="optionB" value={question.b}/>
            <br/>
            <br/>
            <span>Option C: </span>&nbsp;&nbsp;
            <input type="text" name="optionC" value={question.c}/>
            <br/>
            <br/>
            <span>Option D: </span>&nbsp;&nbsp;
            <input type="text" name="optionD" value={question.d}/>
            <br/>
            <br/>
            <span>Answer: </span>&nbsp;&nbsp;
            <input type="text" name="answer" value={question.ans}/>
            <br/>
            <br/>
            <button type="button" onClick={handleFlag}>Add Question</button>
            </div>):""
            }
          </div>
        )}
      </div>
    );
  }
  
  export default Dropdown;
  