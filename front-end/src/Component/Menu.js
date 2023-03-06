import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, } from 'reactstrap';

const Menu = () => {
    return (
        <ListGroup>
           
            <Link className="list-group-item list-group-item-action" tag ="a" to="/">
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag ="a" to="/admin-login">
                Admin Login
            </Link>
            <Link className="list-group-item list-group-item-action" tag ="a" to="/user-login">
                User Login
            </Link>
        </ListGroup>
    )
}
export default Menu;