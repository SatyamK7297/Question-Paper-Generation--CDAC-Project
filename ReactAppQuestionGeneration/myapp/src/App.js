import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import SignUp from "./component/SignUp";
import Admin from "./component/Admin";
import Header from "./component/headerAndFooter/Header";
import Footer from "./component/headerAndFooter/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import AddCourseAndSubject from "./component/AddCourseAndSubject";
import AddQuestion from "./component/AddQuestion";
import AdminHome from "./component/AdminHome";
import GenerateQuestionPaper from "./component/GenerateQuestionPaper";
import SignIn from "./component/SignIn";
import AutoPaperGeneration from "./component/AutoPaperGeneration";
import ManualPaperGeneration from "./component/ManualPaperGeneration";
import ShowQuestionPapers from "./component/ShowQuestionPapers";
function App() {

const  theme={
  colors:{
    heading:"rgb(24 24 29)",
    text:"rgb(24 24 29)",
    white:"#fff",
    black:"#212529",
    helper:"#8490ff",
    bg:"rgb(249 249 255)",
    footer_bg:"#0a1435",
    btn:"rgb(98 84 243)",
    border:"rgba(98,84,234,0.5)",
    hr:"#ffffff",
    gradient:"liner-gradient(0deg,rgb(132 144 255) 0%, rbg(98 189 252) 100%)",
    shadow:"rgba(0,0,0,0.2) 0px,1px,3px,0px,rgba(27,31,35,0.15) 0px 0px 0px 1px",
    shadowSupport:"rgba(0,0,0,0.16) 0px 1px 4px",
  },
  media : {mobile:"768px",tab:"998px"},

}

  return (
    <div style={{ backgroundColor: '' }}>
     <ThemeProvider theme={theme}>
      <GlobalStyle/>
     <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/about" element={<About/>} exact />
          <Route path="/contact" element={<Contact/>} exact />
          <Route path="/signup"  element={<SignUp/>} exact/>
          <Route path="/signin" element={<SignIn/>} exact/>
          <Route path="/admin" element={<Admin/>} >
            
              <Route path=""  element={<AdminHome/>}  exact />
              <Route path="add-course-subject" element={<AddCourseAndSubject/>} exact />
              <Route path="add-Question" element={<AddQuestion/>} exact />
              <Route path="generate-question-paper" element={<GenerateQuestionPaper/>}  exact />
              <Route path ="generate-question-paper-auto" element={<AutoPaperGeneration/>} exact/>
              <Route path="generate-question-paper-manual" element={<ManualPaperGeneration/>} exact/>
              <Route path="question-paper-list" element={<ShowQuestionPapers/>} exact/>
          </Route>
          
          
        </Routes>
        <Footer/>
      </BrowserRouter>
     </ThemeProvider>
      
    </div>
  );
}

export default App;
