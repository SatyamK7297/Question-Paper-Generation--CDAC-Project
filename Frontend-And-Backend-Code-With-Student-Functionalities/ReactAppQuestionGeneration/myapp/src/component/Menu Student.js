import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, } from 'reactstrap';

const Menu = () => {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action"  to="/student/question-paper-list" action>
                Question Paper List by Course And Subject
            </Link>
            
        </ListGroup>
    )
}
export default Menu;