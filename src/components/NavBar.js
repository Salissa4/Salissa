import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import sal2 from '../assets/images/sal2.svg';
import navimg from '../assets/images/navimg.svg';
import git from '../assets/images/git.png';
import Pdf from '../assets/docs/SH.pdf';
import email from '../assets/images/email.png'

export default function NavBar () {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand='md' className={scrolled ? 'scrolled' : ''} >
        <img className='header-img'src={sal2} alt='salissa'/>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav'>
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href='#project' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href={Pdf}className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
            </Nav>
            <span className='navbar-text' >
              <div className='social-icon'>
              <a href='https://www.linkedin.com/in/salissah/'><img src={navimg} alt='linked in icon' /></a>
              <a href='https://github.com/Salissa4'><img src={git} alt='github icon' /></a>
              <a href="mailto:salissa4@gmail.com?"><img src={email} alt='envelope'/></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}