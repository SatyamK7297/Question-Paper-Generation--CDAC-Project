import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import User from '../service/user_service'
import UserDetails from './UserDetails';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

function UserLogin(){
    const [credentials,setCredentials] = useState({email:'',password:''})
    const [msg,setMsg] = useState('');
    const [data,setData] = useState({});
    let history = useNavigate();

    const handleClick=(event)=>{
        event.preventDefault();
        User.Login(credentials)
        .then(result => {
            setData(result);
            <UserDetails userDetails={data}/>;
            history("/user-details");
        })
        .catch(error => {
            setMsg("Invalid Credentials");
            history("/user-login")  
        })
       
    }

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setCredentials({...credentials,[name]:value})
    }
    return(
        <div>
        <Form>
        <h1>User Login</h1>
        <h4 style={{color:'red'}}>{msg}</h4>
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
  </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Button variant="primary" type="submit" onClick={handleClick}>
<Link className="list-group-item list-group-item-action" tag ="a" to="/user-signup">
    SignUp?
</Link>
  </Button>
</Form>
</div>
    )
  }

export default UserLogin;