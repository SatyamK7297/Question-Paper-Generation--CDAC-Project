import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Admin from '../service/admin_service'
import {useNavigate} from 'react-router-dom';

function AdminLogin(){
    const [credentials,setCredentials] = useState({email:'',password:''})
    const [msg,setMsg] = useState('');
    let history = useNavigate();

    const handleClick=(event)=>{
        event.preventDefault();
        Admin.AdminLogin(credentials)
        .then(result => {
            history("/admin");
        })
        .catch(error => {
            setMsg(error);
            history("/admin-login")  
        })
    }

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setCredentials({...credentials,[name]:value})
    }


    return(
        <Form>
        <h1>Admin Login</h1>
        {msg}
        <br/>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" value={credentials.email} onChange={handleChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" value={credentials.password} onChange={handleChange} />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleClick}>
    Login
  </Button>
</Form>
    )
}
export default AdminLogin;