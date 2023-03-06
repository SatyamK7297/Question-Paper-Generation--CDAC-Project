import httpClient from '../http-common'

const Login = (data) => {
    return httpClient.post("/user/signin",data);
  };

const Signup = (data,id) =>{
    return httpClient.post(`/user/signup/${id}`,data);
};
  
  
  
  export default {Login,Signup};