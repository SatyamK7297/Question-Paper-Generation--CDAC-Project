import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, } from 'reactstrap';

const Menu = () => {
    return (
        <ListGroup>
           
            <Link className="list-group-item list-group-item-action" to="/admin" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action"  to="/admin/add-course-subject" action>
                Add Course And Subjects
            </Link>
            <Link className="list-group-item list-group-item-action"  to="/admin/add-Question" action>
                Add Question
            </Link>
            <Link className="list-group-item list-group-item-action"  to="/admin/generate-question-paper" action>
                Generate Question Paper
            </Link>
            <Link className="list-group-item list-group-item-action"  to="/admin/generate-question-paper-auto" action>
                Generate Question Paper Automatically
            </Link>
            <Link className="list-group-item list-group-item-action"  to="/admin/generate-question-paper-manual" action>
                Generate Question Paper Manually
            </Link>
            <Link className="list-group-item list-group-item-action"  to="/admin/question-paper-list" action>
                Question Paper List by Course And Subject
            </Link>
            
        </ListGroup>
    )
}
export default Menu;