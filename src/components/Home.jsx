import React, { useEffect, useState }from "react";
import '../App.css'; //Aqui diz para procurar um style.css na pasta atual
import api from "./api";
import {Container, Row, Col, Button, InputGroup,FormControl} from 'react-bootstrap';
import illustration from "./img/Illustration 1.png";
import illustration2 from "./img/Illustration 2.png";
import icon from "./img/Icon/user.png";
import icon2 from "./img/Icon/location.png";
import logofooter from "./img/©2020trechange.png";
import icon3 from "./img/Icon/Server.png";
import icon4 from "./img/check.png";
import logotrue from "./img/logotrue.png";
import icon5 from "./img/Socmed/Facebook.png";
import icon6 from "./img/Socmed/Instagram.png";
import icon7 from "./img/Socmed/Twitter.png";






function Home(){ 

  const [photos, setPhotos] = useState([])

  useEffect(() => {
    api.get("photos/")
     .then((response) => {
       setPhotos(response.data)
     })
     .catch(() => {
       console.log("Deu errado")
     })
   }, [])
 
    return(    


<>
<Container className="section2">
  <Row>
    <Col className="section3">
    <h1>Want anything to be easy with Truechange.</h1>
    <h5>Provide a network for all your needs with ease and fun using 
      <b > Truechange</b> discover interesting features from us.</h5>
      <br></br>
      <Button variant="danger" size= "md">Get Started</Button> 
    </Col>

    <Col>
    <img
        src={illustration}
        width="100%"
        height="100%"
        
        alt="React Bootstrap logo"
      />

    </Col>
  </Row>
</Container>



    <Container className="section2">
  <Row>
    <Col>
    <img
        src={icon}
        width="30"
        height="30"
        alt="React Bootstrap logo"   
      />
        <b> 90+ </b>
         Users
        
      
    
    </Col>

    <Col>
    <img
        src={icon2}
        width="30"
        height="30"
        
        alt="React Bootstrap logo"
      />
        <b> 30+ </b>
         Users
    </Col>

    <Col>
    <img
        src={icon3}
        width="30"
        height="30"
        
        alt="React Bootstrap logo"
      />
      <b> 50+ </b>
         Users
    </Col>

    
  </Row>
</Container>

<Container className="section2">
  <Row>
    <Col className="section3">
    <img
        src={illustration2}
        width="100%"
        height="100%"
        
        alt="React Bootstrap logo"
      />

    </Col>

    
    <Col className="section4">
    <h1>We Provide Many Features You Can Use</h1>
    <h5>You can explore the features that we provide with fun and have their own functions each feature.</h5>
      <br></br>
      <p className="list">
      <img
        src={icon4}
        width="30"
        height="30"
        className="icon-list"
        alt="React Bootstrap logo"
      />
      Powerfull online protection.
      </p>
      <p className="list">
      <img
        src={icon4}
        width="30"
        height="30"
        className="icon-list"
        alt="React Bootstrap logo"
      />
     Internet without borders.
      </p>
      <p className="list">
      <img
        src={icon4}
        width="30"
        height="30"
        className="icon-list"
        alt="React Bootstrap logo"
      />
      Supercharged VPN.
      </p>
      <p className="list">
      <img
        src={icon4}
        width="30"
        height="30"
        className="icon-list"
        alt="React Bootstrap logo"
      />
      No specific time limits.
      </p>
         
    </Col>
  </Row>
</Container>
<Container>
<Row>
    <Col className="section3">
    <h1>Subscribe Now for Get Special Features!.</h1>
    <h6>Let's subscribe with us and find the fun.</h6>
     
    </Col>

    <Col className="subscribe" >
    <br></br>
    
      
      <InputGroup>
      <FormControl
        type="text"
        aria-label="Input group example"
      />
      <Button variant="danger" size= "md">Subscribe</Button> 
    </InputGroup>
      
      

    </Col>
  </Row>

</Container>

<Container className="footer">
        <img src={logotrue} alt ="logo"/>
        <img src={icon5} alt ="logo" />
        <img src={icon6}alt ="logo" />
        <img src={icon7}alt ="logo"/>
        <img src={logofooter}alt ="logo"/>
</Container>

<Container className="Card-blog">
<Row>
<Col>
  {
     photos.map((photo) =>(
        <tr>
            <td>{photo.id}</td>
                                
  </tr>
    ) )

  }
  </Col>

  <Col>
  {
     photos.map((photo) =>(
      <tr>
        <td><img src={photo.thumbnailUrl} width="100"  alt="icone"/></td>                                
       </tr>
           ) )

  }
  </Col>
  <Col>
  {
     photos.map((photo) =>(
        <tr>
            <td>{photo.title}</td>
                                
  </tr>
    ) )

  }
  </Col>
  
</Row>
</Container>


</>

    );
}

    
    

   


export default Home;