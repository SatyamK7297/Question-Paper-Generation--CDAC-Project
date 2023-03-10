import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, } from 'reactstrap';


const Menu = () => {
      
    return (
        <ListGroup>
             <Link  className="list-group-item list-group-item-action"  to="/student/profile" action>
                PROFILE
            </Link>
            <Link  className="list-group-item list-group-item-action"  to="/student/subject-list" action>
                SUBJECTS
            </Link>
           
        </ListGroup>
    )
}
export default Menu;