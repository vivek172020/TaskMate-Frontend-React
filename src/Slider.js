import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


export default function Slider() {
    return (
        <>
            <section className='Myslider'>
                <Container>
                    <Row>
                        <Col>
                            <div className='my-4 text-center'>
                                <div className="Myslider-contant">
                                    <h4>Simple, Powerful &amp; Affordable</h4>
                                    <h2>POS SOFTWARE SOLUTION</h2>
                                    <h4>For All Restaurant Types</h4>
                                </div>
                                <p><a href="" className="bookdemo">Book A Demo</a></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
