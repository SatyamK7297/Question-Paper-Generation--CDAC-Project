import React from 'react';
import { Col, Container, Row } from "reactstrap";
import AdminHeader from "./AdminHeader";
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Menu";


 function Admin(){
    return(
        <div>
       
        <Container>
          <AdminHeader />
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>

              <Outlet/>
            
            </Col>
          </Row>
        </Container>
     
        </div>
    )
 }
 export default Admin;