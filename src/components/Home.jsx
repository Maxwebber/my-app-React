import React, { useEffect, useState } from "react";
import '../App.css'; //Aqui diz para procurar um style.css na pasta atual
import api from "./api";
import { CFooter } from '@coreui/react';
import { Container, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';
import illustration from "./img/Illustration 1.png";
import illustration2 from "./img/Illustration 2.png";
import icon from "./img/Icon/user.png";
import icon2 from "./img/Icon/location.png";
import icon3 from "./img/Icon/Server.png";
import icon4 from "./img/check.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import logotrue from "./img/logotrue.png";
import icon5 from "./img/Socmed/Facebook.png";
import icon6 from "./img/Socmed/Instagram.png";
import icon7 from "./img/Socmed/Twitter.png";
import logofooter from "./img/©2020trechange.png";



function Home() { 



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



  const options = {
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 200,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      800: {
        items: 4
      },
      1000: {
        items: 5
      }
     
    }
  };

  return (



    <>
      <Container className="section2">
        <Row>
          <Col className="section3">
            <h1>Want anything to be easy with Truechange.</h1>
            <h5>Provide a network for all your needs with ease and fun using
              <b > Truechange</b> discover interesting features from us.</h5>
            <br></br>
            <Button variant="danger" size="md">Get Started</Button>
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
            <h1>Subscribe Now for Get Special Features!</h1>
            <h6>Let's subscribe with us and find the fun.</h6>

          </Col>

          <Col className="subscribe" >
            <br></br>


            <InputGroup>
              <FormControl
                type="text"
                aria-label="Input group example"
              />
              <Button variant="danger" size="md">Subscribe</Button>
            </InputGroup>



          </Col>
        </Row>

      </Container>


      
<Container className="blog">


      <div className="slider">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="should-know-title">Blog TrueChange</div>
            <OwlCarousel
              className="slider-items owl-carousel"
              {...options}
              id="slider_cat"
            >
              {photos.map((photo) => ( 
              <div className="item" key={photo.id}>
                <div className="cat_box">
                    <div className="cate-box1">
                      <div className="cat_offer_text">
                        <img
                           alt="" src={photo.thumbnailUrl}/> 
                          
                          {photo.id} 
                        <h5>{photo.title}</h5>
                        {/* <!-- <div className="all_items">45 item</div> --> */}
                      </div>
                    </div>
                  </div>
              </div>
))}
             </OwlCarousel>
          </div>
        </div >
      </div>
    </div>
    </Container>

  <Container>

  <CFooter>
  <div className="footer">
        <img className="logofooter1" src={logotrue} alt="logo" />
        <img className="icon5" src={icon5} alt="logo" />
        <img className="icon6"src={icon6} alt="logo" />
        <img className="icon7" src={icon7} alt="logo" />
        <img className="iconlogor2" src={logofooter} alt="logo" />
        </div>
</CFooter>

  </Container>




    </>

  );
}







export default Home;