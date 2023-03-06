import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
function UserDetails(props) {
  return (
    <div>
      <h3>Welcome Student!!</h3>
      <Table hover size="md">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.userDetails.firstName}</td>
            <td>{props.userDetails.lastName}</td>
            <td>{props.userDetails.email}</td>
            <td>{props.userDetails.course}</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="primary" size="md">
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/generate-question-paper"
        >
          Practice Test
        </Link>
      </Button>
    </div>
  );
}
export default UserDetails;
