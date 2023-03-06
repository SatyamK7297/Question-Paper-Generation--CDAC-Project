import { Col, Container, Row } from "reactstrap";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./component/Menu";
import AddCourseAndSubject from "./component/AddCourseAndSubject";
import AddQuestion from "./component/AddQuestion";
import Home from "./component/Home";
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
                <Route path="/"  element={<Home/>}  exact />
                <Route path="/add-course-subject" element={<AddCourseAndSubject/>} exact />
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
