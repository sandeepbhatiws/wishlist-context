import React, { useContext } from 'react'
import log from '../Images/myntra.png';
import '../Custom.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Context } from '../MainContext';

function Header() {
    const { cart } = useContext(Context);
    return (
        <Container fluid className='header sticky-top bg-white'>

            <Row className='main-menu'>
                <Col lg={1} className='py-4 ps-4 ms-3'>
                    <Link to={"/"}>  <img className='log' src={log} width='53px' height='36' /></Link>
                </Col>

                <Col lg={5}>
                    <ul className='d-flex primary-menu'>
                        <li><Link to={"/men"}>MEN</Link></li>
                        <li>WOMEN</li>
                        <li>KIDS</li>
                        <li>HOME & LIVING</li>
                        <li>BEAUTY</li>
                        <li>Studio<sup>NEW</sup></li>
                    </ul>
                </Col>
                <Col lg={3}>
                    <ul className='d-flex justify-content-end primary-menu'>
                        <li>Cart ({cart?.length})</li>
                    </ul>
                </Col>
            </Row>

        </Container>
    )
}

export default Header