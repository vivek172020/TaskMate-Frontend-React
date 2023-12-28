import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SlArrowRight } from "react-icons/sl";
import { LuMapPin } from "react-icons/lu";
import { IoCallSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineWhatsapp } from "react-icons/md";
import indiaFlag from './Images/india.png'
import ghanaFlag from './Images/ghana.png'
import kuwaitFlag from './Images/kuwait.png'
import qatarFlag from './Images/qatar.png'
import mauritiusFlag from './Images/mauritius.png'
import arabFlag from './Images/united-arab-emirates.png'
import { clear } from '@testing-library/user-event/dist/clear';



export default function Footer() {
    return (
        <>
            <section className='Footer'>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className='left-footer'>
                                <div className="left-title-footer">
                                    <h2>Applications</h2>
                                </div>
                                <div className="left-footer-content">
                                    <ul className="left-footer-ul">
                                        <li className="left-footer-li">
                                            <a href="" target="_blank">
                                                <span className="list-icon"><SlArrowRight /></span>
                                                <span className="icon-list-text">Fine Dine POS</span>
                                            </a>
                                        </li>
                                        <li className="left-footer-li">
                                            <a href="" target="_blank">
                                                <span className="list-icon"><SlArrowRight /></span>
                                                <span className="icon-list-text">Pizzeria POS</span>
                                            </a>
                                        </li>
                                        <li className="left-footer-li">
                                            <a href="" target="_blank">
                                                <span className="list-icon"><SlArrowRight /></span>
                                                <span className="icon-list-text">Ice Cream Parlor POS</span>
                                            </a>
                                        </li>
                                        <li className="left-footer-li">
                                            <a href="" target="_blank">
                                                <span className="list-icon"><SlArrowRight /></span>
                                                <span className="icon-list-text">Food Trucks POS</span>
                                            </a>
                                        </li>
                                        <li className="left-footer-li">
                                            <a href="" target="_blank">
                                                <span className="list-icon"><SlArrowRight /></span>
                                                <span className="icon-list-text">Quick Serve Restaurants POS</span>
                                            </a>
                                        </li>
                                        <li className="left-footer-li">
                                            <a href="" target="_blank">
                                                <span className="list-icon"><SlArrowRight /></span>
                                                <span className="icon-list-text">Bars &amp; Pubs POS</span>
                                            </a>
                                        </li>
                                        <li className="left-footer-li">
                                            <a href="" target="_blank">
                                                <span className="list-icon"><SlArrowRight /></span>
                                                <span className="icon-list-text">Bakery &amp; Confectionery POS</span>
                                            </a>
                                        </li>
                                        <li className="left-footer-li">
                                            <a href="" rget="_blank">
                                                <span className="list-icon"><SlArrowRight /></span>
                                                <span className="icon-list-text">Cafe &amp; Lounges POS</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='center-footer'>
                                <div className="left-title-footer">
                                    <h2>Products</h2>
                                </div>
                                <div className="left-footer-content">
                                    <ul className="left-footer-ul center">
                                        <li className="left-footer-li center">
                                            <a href="">
                                                <span className="list-icon"><SlArrowRight /></span>
                                                <span className="icon-list-text">ReANALYSE - Reporting App</span>
                                            </a>
                                        </li>
                                        <li className="left-footer-li center">
                                            <a href="">
                                                <span className="list-icon"><SlArrowRight /></span>
                                                <span className="icon-list-text">ReECHO - Feedback App</span>
                                            </a>
                                        </li>
                                        <li className="left-footer-li center">
                                            <a href="">
                                                <span className="list-icon"><SlArrowRight /></span>
                                                <span className="icon-list-text">TabMyOrder - Realtime Ordering App</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="left-title-footer">
                                    <h2>Quick Links</h2>
                                </div>
                                <div className="left-footer-content">
                                    <ul className="left-footer-ul center">
                                        <li className="left-footer-li center">
                                            <a href="">
                                                <span className="list-icon"><SlArrowRight /></span>
                                                <span className="icon-list-text">RestroTrail</span>
                                            </a>
                                        </li>
                                        <li className="left-footer-li center">
                                            <a href="">
                                                <span className="list-icon"><SlArrowRight /></span>
                                                <span className="icon-list-text">Career</span>
                                            </a>
                                        </li>
                                        <li className="left-footer-li center">
                                            <a href="">
                                                <span className="list-icon"><SlArrowRight /></span>
                                                <span className="icon-list-text">Integretion</span>
                                            </a>
                                        </li>
                                        <li className="left-footer-li center">
                                            <a href="">
                                                <span className="list-icon"><SlArrowRight /></span>
                                                <span className="icon-list-text">Partners</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='center-footer right'>
                                <div className="left-title-footer right">
                                    <h2>Get In Touch</h2>
                                </div>
                                <div className="left-footer-content">
                                    <ul className="left-footer-ul right">
                                        <li className="left-footer-li right">
                                            <a href="" target="_blank" rel="nofollow">
                                                <span className="list-icon right"><LuMapPin /></span>
                                                <span className="icon-list-text">Visit Us</span>
                                            </a>
                                        </li>
                                        <li className="left-footer-li right">
                                            <a href="tel:+918140402817" target="_blank">
                                                <span className="list-icon right"><IoCallSharp /></span>
                                                <span className="icon-list-text">+91 81404 02817</span>
                                            </a>
                                        </li>
                                        <li className="left-footer-li right">
                                            <a href="mailto:vivekdonga1720@gmail.com" target="_blank">
                                                <span className="list-icon right"><MdMail /></span>
                                                <span className="icon-list-text">info@re-pos.in</span>
                                            </a>
                                        </li>
                                        <li className="left-footer-li right">
                                            <a href="" target="_blank">
                                                <span className="list-icon right"><FaStar /></span>
                                                <span className="icon-list-text">Google Review</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="left-footer-content">
                                    <span className="icon-item-span">
                                        <a className="icon-a facebook" href="https://www.facebook.com" target="_blank">
                                            {/* <span className="elementor-screen-only">Facebook</span> */}
                                            <FaFacebook className='fs-5' /></a>
                                    </span>
                                    <span className="icon-item-span">
                                        <a className="icon-a linkedin" href="https://sg.linkedin.com" target="_blank">
                                            {/* <span className="elementor-screen-only">Linkedin</span> */}
                                            <IoLogoLinkedin className='fs-5' /></a>
                                    </span>
                                    <span className="icon-item-span">
                                        <a className="icon-a instagram" href="https://www.instagram.com" target="_blank">
                                            {/* <span className="elementor-screen-only">Instagram</span> */}
                                            <FaInstagram className='fs-5' /></a>
                                    </span>
                                    <span className="icon-item-span">
                                        <a className="icon-a whatsup" href="https://wa.me/+917600603011" target="_blank">
                                            {/* <span className="elementor-screen-only">Whatsapp</span> */}
                                            <MdOutlineWhatsapp className='fs-5' /></a>
                                    </span>
                                </div>
                                <div className="flag-main-div mt-4">
                                    <dl className="falg-item">
                                        <dt className="falg-icon landscape">
                                            <img width="512" height="512" src={indiaFlag} className="img-fluid" alt="India" loading="lazy" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw" />
                                        </dt>
                                    </dl><dl className="falg-item">
                                        <dt className="falg-icon">
                                            <img width="512" height="512" src={ghanaFlag} className="img-fluid" alt="" loading="lazy" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw" />
                                        </dt></dl><dl className="falg-item">
                                        <dt className="falg-icon">
                                            <img width="512" height="512" src={kuwaitFlag} className="img-fluid" alt="" loading="lazy" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw" />
                                        </dt></dl><br style={{ clear: 'both' }} /><dl className="falg-item">
                                        <dt className="falg-icon">
                                            <img width="512" height="512" src={qatarFlag} className="img-fluid" alt="" loading="lazy" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw" />
                                        </dt></dl><dl className="falg-item">
                                        <dt className="falg-icon">
                                            <img width="512" height="512" src={mauritiusFlag} className="img-fluid" alt="" loading="lazy" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw" />
                                        </dt></dl><dl className="falg-item">
                                        <dt className="falg-icon">
                                            <img width="512" height="512" src={arabFlag} className="img-fluid" alt="" loading="lazy" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 512px, 100vw" />
                                        </dt></dl><br style={{ clear: 'both' }} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='border-top border-bottom'>
                    <Container>
                        <Row>
                            <Col>
                                <div className='py-3'>
                                    <ul className="country-city-menu">
                                        <li className="menu-item"><a href="">India</a></li>
                                        <li className="menu-item"><a href="">Ahmedabad</a></li>
                                        <li className="menu-item"><a href="">Goa</a></li>
                                        <li className="menu-item"><a href="">Hyderabad</a></li>
                                        <li className="menu-item"><a href="">Mumbai</a></li>
                                        <li className="menu-item"><a href="">Pune</a></li>
                                        <li className="menu-item"><a href="">Surat</a></li>
                                        <li className="menu-item"><a href="">Vadodara</a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='py-3'>
                                    <ul className="country-city-menu">
                                        <li className="menu-item"><a href="">Saudi Arabia</a></li>
                                        <li className="menu-item"><a href="">Jeddah</a></li>
                                        <li className="menu-item"><a href="">Mauritius</a></li>
                                        <li className="menu-item"><a href="">Kenya</a></li>
                                        <li className="menu-item"><a href="">Nairobi</a></li>
                                        <li className="menu-item"><a href="">Ghana</a></li>
                                        <li className="menu-item"><a href="">Accra</a></li>
                                        <li className="menu-item"><a href="">Tanzania</a></li>
                                        <li className="menu-item"><a href="">Uganda</a></li>
                                        <li className="menu-item"><a href="">Mauritius</a></li>
                                        <li className="menu-item"><a href="">Rwanda</a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Row className='text-center align-items-center mt-3'>
                        <Col>
                            <div style={{ color: '#ffffff' }} >
                                © 2023 All Rights Reserved by <a style={{ color: '#ffffff' }} href="https://re-pos.in/">RePOS</a><a style={{ color: '#ffffff' }}>.</a>					</div>
                        </Col>
                    </Row>
                </Container>

            </section >
        </>
    )
}
