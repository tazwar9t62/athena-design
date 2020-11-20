import React from 'react';
import { Jumbotron,Container, InputGroup, FormControl, Button } from 'react-bootstrap';

const GetDesign = () => {
    return (
        <div>
            <Jumbotron fluid className="bg-transparent mt-5 pt-5">
  <Container className="text-center">
    <h1>Get Your design, right now!</h1>
    <p>
      Be the the first to know our latest offers and updates
    </p>
    <InputGroup className="justify-content-center mt-4" >
				
					<FormControl className="shadow border-0 col-md-4 " type="email" placeholder="Enter your email address" />
                    
          <Button className="btn btn-secondary-brand">Get Started</Button>
                    
				</InputGroup>
  </Container>
</Jumbotron>
        </div>
    );
};

export default GetDesign;