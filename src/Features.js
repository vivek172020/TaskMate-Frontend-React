import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import lineImg from './Images/title_divider-1.png'
import PointSale from './Reusable/PointSale'
import seticon01 from './Images/ftr_set_icon_01.png'
import seticon02 from './Images/ftr_set_icon_02.png'
import seticon03 from './Images/ftr_set_icon_03.png'
import seticon04 from './Images/ftr_set_icon_04.png'
import seticon05 from './Images/ftr_set_icon_05.png'
import seticon06 from './Images/ftr_set_icon_06.png'
import seticon07 from './Images/ftr_set_icon_07.png'
import seticon08 from './Images/ftr_set_icon_08.png'
import seticon011 from './Images/ftr_set_icon_white_01.png'
import seticon022 from './Images/ftr_set_icon_white_02.png'
import seticon033 from './Images/ftr_set_icon_white_03.png'
import seticon044 from './Images/ftr_set_icon_white_04.png'
import seticon055 from './Images/ftr_set_icon_white_05.png'
import seticon066 from './Images/ftr_set_icon_white_06.png'
import seticon077 from './Images/ftr_set_icon_white_07.png'
import seticon088 from './Images/ftr_set_icon_white_08.png'
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Features() {
    const [data, setdata] = useState([
        {
            img: seticon01,
            whiteimg: seticon011,
            title: 'Point Of Sale',
            description: 'Introducing a combination of unparalleled characteristics for managing your restaurant'
        },
        {
            img: seticon02,
            whiteimg: seticon022,
            title: 'Stock Management',
            description: 'Helps you efficiently manage stock, unused items, reduce wastage and record new stock'
        }, {
            img: seticon03,
            whiteimg: seticon033,
            title: 'Sales & Marketing',
            description: 'Enables you to drive result oriented sales and marketing campaigns for your restaurant'
        }, {
            img: seticon04,
            whiteimg: seticon044,
            title: 'Customer Relationship Tool',
            description: 'Helps you analyse customer behavior and enables you to stay in touch with your customers'
        }, {
            img: seticon05,
            whiteimg: seticon055,
            title: 'Franchise Management',
            description: 'An exclusive feature for multichain restaurants or businesses operating on the franchisee model'
        }, {
            img: seticon06,
            whiteimg: seticon066,
            title: 'Head Office Module',
            description: 'Central management of overall functioning of menus, recipes, inventory, user roles & permissions'
        },
        {
            img: seticon07,
            whiteimg: seticon077,
            title: 'Reporting & Analytics',
            description: 'Get powerful insights about your restaurant on-the-go and use it to improvise your business'
        },
        {
            img: seticon08,
            whiteimg: seticon088,
            title: 'Settings & Configuration',
            description: 'Assists you in operating your business effectively with options that best suit your processes'
        },
    ])

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <>
            <section className='Features'>
                <Container>
                    <Row className='py-3 text-center'>
                        <Col>
                            <div className="feature-title"><h2>Explore our awesome <strong>Feature Set</strong></h2>
                                <center><img src={lineImg} /></center>
                            </div>
                        </Col>
                    </Row>
                    <Row className='my-lg-5'>
                        {data.map((item, i) => {
                            return (
                                <>
                                    <Col key={i} lg={3} md={6} sm={6} xs={6} className='mb-4'>
                                        <div data-aos="zoom-in">
                                            <PointSale data={item} />
                                        </div>
                                    </Col>
                                </>
                            )
                        })}
                    </Row>
                </Container>
            </section>
        </>
    )
}
