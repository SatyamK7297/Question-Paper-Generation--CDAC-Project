import "./App.css";
import CourseDetails from "./component/course";
import SignUp from "./component/signup";
import SignIn from "./component/signin";


function App() {
  return (
    <div>
    <CourseDetails/>
      <br/>
      <br/>
    <h1>Signup</h1>
    <SignUp/>
    <br/>
      <br/>
    <h1>Singin</h1>
    <SignIn/>
  
    </div>
  );
}

export default App;
