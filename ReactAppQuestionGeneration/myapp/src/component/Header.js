import React from 'react';
import { Card, CardBody,CardHeader,CardText,CardTitle,CardFooter,Button } from 'reactstrap';



function Header ({name,title}){
    return(<div>
        {/* <Card className=" my-2 bg-success">
            <CardBody><h1 className="text-center my-3" >Pariskha</h1></CardBody>
        </Card> */}
   <Card
  className="my-2"
  style={{
    width: 'fill'
  }}
>
  <CardHeader>
  Pariskha
  </CardHeader>
  <CardBody>
    <CardTitle tag="h5">
      Pariskha
    </CardTitle>
    <CardText>
      Welcome To Pariskha Portal
    </CardText>
   
  </CardBody>
  
</Card>



    </div>)






};
export default Header;