import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Country from './Reusable/Country'
import lineImg from './Images/title_divider-1.png'
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Services() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    return (
        <>
            <section className='Services'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div data-aos="fade-up">
                                <div className='country-city py-2'>
                                    <div className='me-4'>
                                        < Country number={7} name={'country'} />
                                    </div>
                                    <div style={{ marginTop: '50px' }}>
                                        < Country number={50} name={'City'} />
                                    </div>
                                </div>
                                <div className='features-outlet py-2'>
                                    <div className='me-4'>
                                        < Country number={100} name={'Features'} />
                                    </div>
                                    <div style={{ marginTop: '50px' }}>
                                        < Country number={750} name={'Outlets'} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div data-aos="fade-up" className='px-2' style={{ marginTop: '50px' }}>
                                <div className="service-pos"><h2>What is <strong>RePOS</strong>?</h2>
                                    <p>
                                        <img style={{ marginBottom: "30px" }} src={lineImg} /><br />
                                        RePOS is much more than just any other POS Software. It has been conceived, designed and brought to reality by a team of software experts. It serves all the requirements a restaurant has in order to achieve its goal of customer satisfaction.
                                    </p>
                                    <p>RePOS is a Full-featured POS software application that can handle counter sales, inventory tracking, customer data management, mobile connectivity, and robust integrations. It is a solution for Casual / Fine Dine Restaurants, Quick Serve Restaurants, Bakery, Cake Shops, Cafe / Coffee Shops, Ice Cream / Juice Centers, Food Chains, Pizza Chains, Delivery Kitchen, Food Trucks and so on!</p>
                                </div>
                                <div className='py-3'>
                                    <a href="" className="bookdemo know">Know More</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="inside_divider"></div>
        </>
    )
}
