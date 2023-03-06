import httpClient from '../http-common'

const adminLogin = (data) => {
    return httpClient.post("/admin",data);
  };
  
export default adminLogin;