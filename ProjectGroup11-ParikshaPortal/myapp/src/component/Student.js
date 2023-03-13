import React from 'react';
import { Col, Container, Row } from "reactstrap";
import StudentHeader from "./StudentHeader";
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Menu_Student";


 function Student(){
  
    return(
        <div>
       
        <Container>
          <StudentHeader />
          <Row>
            <Col md={4}>
              <Menu/>
            </Col>
            <Col md={8}>

              <Outlet/>
            
            </Col>
          </Row>
        </Container>
     
        </div>
    )
 }
 export default Student;