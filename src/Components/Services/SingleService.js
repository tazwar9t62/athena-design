import React from 'react';
import { Card } from 'react-bootstrap';

const SingleService = ({sData}) => {
    let {title, description, image} = sData;

    return (
        <div className="mt-5">           
                <div className="d-flex justify-content-between ">
                <div className="col-md-3  p-5">
                <Card className="text-center service-card-container border-0 p-5" style={{ width: '18rem' }}>
  <Card.Img className="w-25 mx-auto d-block" variant="top" src={image} />
  <Card.Body >
    <Card.Title>{title}</Card.Title>
    <Card.Text>{description}
    </Card.Text>
  </Card.Body>
</Card>
                </div>
                </div>
            </div>
    );
};

export default SingleService;