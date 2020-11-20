import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import './Footer.css';


const Footer = () => {
    return (
        <div className="section footer">
           <Container className="my-3">
               <Row>
                   <Col md={5} className="px-5 footer-icon mb-3">
                       <img style={{width:"120px"}} src="https://i.ibb.co/nfKXtZq/Group-86.png
" alt=""/>
                       <p className="iconStyle">
                           <a href="#"><img src="https://i.ibb.co/PN3h6Cv/facebook-logo-in-circular-shape-2x.png" alt=""/></a>
                           <a href="#"><img src="https://i.ibb.co/4W2t8Gd/twitter-4-2x.png" alt=""/></a>
                           <a href="#"><img src="https://i.ibb.co/74cWsRK/linkedin-2-2x.png" alt=""/></a>
                           <a href="#"><img src="https://i.ibb.co/rtBdwyK/dribbble-1-2x.png" alt=""/></a>
                           
                       </p>
                   </Col>
                   <Col md={7}>
                        <Row className="text-secondary footer-description">
                            <Col sm={12} md={4} className="mb-3">
                                <span>Feature</span> <br/>
                                <span>Enterprise</span> <br/>
                                <span>Pricing</span>
                            </Col>
                            <Col sm={12} md={4} className="mb-3">
                                <span>About Us</span> <br/>
                                <span>Terms of Service</span> <br/>
                                <span>Security</span> <br/>
                                <span>Login</span>
                            </Col>
                            <Col sm={12} md={4} className="mb-3">
                                <span>Blog</span> <br/>
                                <span>Help Center</span> <br/>
                                <span>Contact Us</span> <br/>
                                <span>Status</span>                            
                            </Col>
                        </Row>
                       
                   </Col>
               </Row>
               <Row className="text-secondary mt-3 text-center">
    <Col><span>&copy; TAZWAR || {(new Date()).getFullYear()}</span></Col>
                        </Row>
           </Container>
        </div>
    );
};

export default Footer;