import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './Images/re-pos_logo.png';
import icon1 from './Images/menu_favicon_tour_01.png';

export default function MyHeader() {
    const [tourDropdownOpen, setTourDropdownOpen] = useState(false);
    const [productDropdownOpen, setProductDropdownOpen] = useState(false);

    const handleTourDropdownEnter = () => {
        setTourDropdownOpen(true);
    };

    const handleTourDropdownLeave = () => {
        setTourDropdownOpen(false);
    };

    const handleProductDropdownEnter = () => {
        setProductDropdownOpen(true);
    };

    const handleProductDropdownLeave = () => {
        setProductDropdownOpen(false);
    };

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100 Mynavbar py-3 z-3">
                <Container>
                    <Navbar.Brand href="#"><img src={logo} alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                            <NavDropdown
                                title="Tour"
                                id="navbarScrollingTourDropdown"
                                show={tourDropdownOpen}
                                onMouseEnter={handleTourDropdownEnter}
                                onMouseLeave={handleTourDropdownLeave}
                            >
                                <NavDropdown.Item href="#action3"><img className='icon1' src={icon1} />Point Of Sale</NavDropdown.Item>
                                <NavDropdown.Item href="#action4"><img className='icon1' src={icon1} />Stock Management</NavDropdown.Item>
                                <NavDropdown.Item href="#action5"><img className='icon1' src={icon1} />Sales And Marketing</NavDropdown.Item>
                                <NavDropdown.Item href="#action6"><img className='icon1' src={icon1} />Customer Relationship Tool</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown
                                title="Product"
                                id="navbarScrollingProductDropdown"
                                show={productDropdownOpen}
                                onMouseEnter={handleProductDropdownEnter}
                                onMouseLeave={handleProductDropdownLeave}
                            >
                                <NavDropdown.Item href="#action3"><img className='icon1' src={icon1} />Point Of Sale</NavDropdown.Item>
                                <NavDropdown.Item href="#action4"><img className='icon1' src={icon1} />Stock Management</NavDropdown.Item>
                                <NavDropdown.Item href="#action5"><img className='icon1' src={icon1} />Sales And Marketing</NavDropdown.Item>
                                <NavDropdown.Item href="#action6"><img className='icon1' src={icon1} />Customer Relationship Tool</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#action2">RestroTrail</Nav.Link>
                            <Nav.Link href="#action2">Contact</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <p className='m-0 p-0'><a href="#colophon" className="bookdemo mega-menu-item">Book A Demo</a></p>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
