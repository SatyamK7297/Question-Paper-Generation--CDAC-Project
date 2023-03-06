import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function adminFunctionality(){

    return(
       
           

            <div className="d-grid gap-2">
            <Button variant="primary" size="md">
            <Link className="list-group-item list-group-item-action" tag ="a" to="/generate-question-paper">
                Generate Question Paper
            </Link>
            </Button>
            
            <Button variant="primary" size="md">
            <Link className="list-group-item list-group-item-action" tag ="a" to="/add-Question">
                Add Question 
            </Link>
            </Button>
            
            <Button variant="primary" size="md">
            <Link className="list-group-item list-group-item-action" tag ="a" to="/user-login">
                Add Course and Subject 
            </Link>
            </Button>
            </div>
        
    )
}
export default adminFunctionality;