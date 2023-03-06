import { Col, Container, Row } from "reactstrap";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./component/Menu";
import AdminLogin from "./component/AdminLogin";
import AdminFunctionality from "./component/AdminFunctionality";
import AddQuestion from "./component/AddQuestion";
import Home from "./component/Home";
import UserLogin from "./component/UserLogin";
import UserDetails from "./component/UserDetails";
import UserSignUp from "./component/UserSignUp";
import GenerateQuestionPaper from "./component/GenerateQuestionPaper";
function App() {
  return (
    <div>

      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="*"  element={<Home/>}  exact />
                <Route path="/admin-login" element={<AdminLogin/>} exact />
                <Route path="/admin" element={<AdminFunctionality/>} exact />
                <Route path="/user-login" element={<UserLogin/>} exact />
                <Route path="/user-signup" element={<UserSignUp/>} exact />
                <Route path="/user-details" element={<UserDetails/>} exact />
                <Route path="/add-Question" element={<AddQuestion/>} exact />
                <Route path="/generate-question-paper" element={<GenerateQuestionPaper/>}  exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>

    </div>
  );
}

export default App;
