import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../assets/images/nav-icon1.svg';
import git2 from '../assets/images/git2.png';
import email from '../assets/images/email.png'

export default function Footer () {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center'>
                    <Col size={12} sm={6}>
                    </Col>
                    <Col size={12} sm={6} className='text-center text-sm-end'>
                        <div className='social-icon footer-social'>
                            <a href='https://www.linkedin.com/in/salissah/'><img src={navIcon1} alt='linkedin icon' /></a>
                            <a href='https://github.com/Salissa4'><img src={git2} alt='github icon' /></a>
                            <a href="mailto:salissa4@gmail.com?"><img src={email} alt='envelope'/></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}