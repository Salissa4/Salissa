import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';

export const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-item-center'>
                    <Col sm={6}>
                        <img src={logo} alt='salissa'/>
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/salissah/'><img src={navIcon1} alt='linked in icon' /></a>
                            <a href='https://github.com/Salissa4'><img src={navIcon2} alt='github icon' /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}