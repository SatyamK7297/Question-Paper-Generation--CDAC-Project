import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import credential from "../../script/credential";
const StudentLogout = ()=>{
  const navigate = useNavigate();

    useEffect(() => {
        if (credential.IsLoggedIn()) {
          if(window.confirm("Do you want to logout")){
          credential.Logout();
          navigate("/");
          }else{
            navigate("/student");
          }
        } else {
          navigate("/");
        }
      }, );
}

export default StudentLogout