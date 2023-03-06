import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, } from 'reactstrap';

const Menu = () => {
    return (
        <ListGroup>
           
            <Link className="list-group-item list-group-item-action" tag ="a" to="/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag ="a" to="/add-course-subject" action>
                Add Course And Subjects
            </Link>
            <Link className="list-group-item list-group-item-action" tag ="a" to="/add-Question" action>
                Add Question
            </Link>
            <Link className="list-group-item list-group-item-action" tag ="a" to="/generate-question-paper" action>
                Generate Question Paper
            </Link>
            
        </ListGroup>
    )
}
export default Menu;