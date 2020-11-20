import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Achievements = () => {
    return (
        <div className="section">
        <Container className="my-2">
            <Row>
                <Col md={5} className="mt-3">
                <h2 className="brand-title text-center">Our Achievements</h2>
                    <p className="mt-3 text-muted">
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The
                        point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letter.
                    </p>
                </Col>
                <Col md={7}>
                    <Row>
                        <Col md={6}>
                            <div className="achieveCardOne my-3">
                                <Row className="achieveCardInner">
                                    <Col className="text-right">
                                        <img src="https://i.ibb.co/J5jT6YD/happy-2x.png"alt="" className="img-fluid h-75 mt-1" />
                                    </Col>
                                    <Col>
                                        <h3 className="font-weight-bold">700+</h3>
                                        <span>Happy Clients</span>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="achieveCardTwo my-3">
                                <Row className="achieveCardInner">
                                    <Col className="text-right">
                                        <img src="https://i.ibb.co/CbhxgVb/marketing-2x.png"  alt="" className="img-fluid h-75 mt-1" />
                                    </Col>
                                    <Col>
                                        <h3 className="font-weight-bold">140+</h3>
                                        <span>Projects Completed</span>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className="achieveCardTwo my-3">
                                <Row className="achieveCardInner">
                                    <Col className="text-right">
                                        <img src="https://i.ibb.co/jLxL1dm/surface1-2x.png"alt="" className="img-fluid h-75 mt-1" />
                                    </Col>
                                    <Col>
                                        <h3 className="font-weight-bold">25+</h3>
                                        <span>Crazy Minds</span>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="achieveCardThree my-3">
                                <Row className="achieveCardInner">
                                    <Col className="text-right">
                                        <img src="https://i.ibb.co/9gbNrYY/transportation-2x.png"alt="" className="img-fluid h-75 mt-1" />
                                    </Col>
                                    <Col>
                                        <h3 className="font-weight-bold">75+</h3>
                                        <span>Running Projects</span>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Achievements;