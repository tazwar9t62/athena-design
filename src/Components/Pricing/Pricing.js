import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';

const Pricing = () => {
  return (
   
    <div className="p-5 m-2 text-center">
       <Container className="mt-5">
       <h2 className="brand-title text-center mb-5">Choose You Package</h2>
      </Container>
      <CardDeck>
  <Card className="px-5 border-0">
  <Card.Body className="shadow p-5 card-hover">
      <Card.Title className="font-weight-bold card-title-border"><h1>$199</h1><small>For Basic</small></Card.Title>
      <Card.Text>
      <ul class="list-group">
  <li class="list-group-item border-0">Homepage</li>
  <li class="list-group-item border-0">No Inner Page</li>
  <li class="list-group-item border-0">Asset File</li>
  <li class="list-group-item border-0">Source File</li>
  <li class="list-group-item border-0">Free Stock Photos</li>
  <li class="list-group-item border-0">10 Days Free Support</li>
  <li class="list-group-item border-0">24/7 Support</li>
  
</ul>
      </Card.Text>
      <button className="btn btn-brand  m-2">Order Now</button>
    </Card.Body>
    
  </Card>
  <Card className="px-5 border-0">
   
    <Card.Body className="shadow p-5 card-hover">
      <Card.Title className="font-weight-bold card-title-border"><h1>$399</h1><small>For Preferred</small></Card.Title>
      <Card.Text>
      <ul class="list-group">
  <li class="list-group-item border-0">Homepage</li>
  <li class="list-group-item border-0">4 Inner Page</li>
  <li class="list-group-item border-0">Asset File</li>
  <li class="list-group-item border-0">Source File</li>
  <li class="list-group-item border-0">Free Stock Photos</li>
  <li class="list-group-item border-0">20 Days Free Support</li>
  <li class="list-group-item border-0">24/7 Support</li>
  
</ul>
      </Card.Text>
      <button className="btn btn-brand  m-2">Order Now</button>
    </Card.Body>
    
  </Card>
  <Card className="px-5 border-0"> 
   
  <Card.Body className="shadow p-5 card-hover">
      <Card.Title className="font-weight-bold card-title-border"><h1>$599</h1><small>For Elite</small></Card.Title>
      <Card.Text>
      <ul class="list-group">
  <li class="list-group-item border-0">Homepage</li>
  <li class="list-group-item border-0">8 Inner Page</li>
  <li class="list-group-item border-0">Asset File</li>
  <li class="list-group-item border-0">Source File</li>
  <li class="list-group-item border-0">Free Stock Photos</li>
  <li class="list-group-item border-0">30 Days Free Support</li>
  <li class="list-group-item border-0">24/7 Support</li>
  
</ul>
      </Card.Text>
      <button className="btn btn-brand  m-2">Order Now</button>
    </Card.Body>
   
  </Card>
</CardDeck>
    </div>
  );
};

export default Pricing;