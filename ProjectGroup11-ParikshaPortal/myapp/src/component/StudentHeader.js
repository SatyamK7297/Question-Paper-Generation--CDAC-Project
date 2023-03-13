import React from 'react';
import { Card, CardBody,CardHeader,CardImg,CardText,CardTitle,CardFooter,Button,  UncontrolledCarousel } from 'reactstrap';



function StudentHeader ({name,title}){
    return(<div>
        
   {/* <Card
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
  
</Card> */}






{/* <UncontrolledCarousel
  items={[
    {
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
      src: 'https://picsum.photos/id/123/1200/600'
    },
    {
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
      src: 'https://picsum.photos/id/456/1200/600'
    },
    {
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
      src: 'https://picsum.photos/id/678/1200/600'
    }
  ]}
 /> */}




<>
  <Card className="my-2">
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/900/180"
      style={{
        height: 180
      }}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Pariksha
      </CardTitle>
      <CardText>
        Welcome To Exam Portal
      </CardText>
      <CardText>
        <small className="text-muted">
          Enjoy Your Day
        </small>
      </CardText>
    </CardBody>
  </Card>
 
</>



    </div>)






};
export default StudentHeader;