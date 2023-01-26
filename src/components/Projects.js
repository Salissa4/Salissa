import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/images/color-sharp2.png';
import bored from '../assets/images/bored.png';
import gypsy from '../assets/images/gypsy.png';
import social from '../assets/images/social.png';
import note from '../assets/images/note.png';
import jate from '../assets/images/jate.png';
import dead from '../assets/images/dead.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Projects () {
    const projects = [
        {
            title: 'deadCoder',
            description: 'MERN Full Stack Application',
            imgUrl: dead,
            Github: 'https://github.com/Salissa4/deadCoder',
            Live: 'https://deadcoder.herokuapp.com/',
        },
        {
            title: 'Bored No Mo',
            description: 'Interactive front end application',
            imgUrl: bored,
            Github: 'https://github.com/Salissa4/BoredNoMo',
            Live: 'https://catpolk.github.io/Bored-NO-MO-project-1/',
        },
        {
            title: 'Gypsy',
            description: 'Full Stack Application',
            imgUrl: gypsy,
            Github:'https://github.com/Salissa4/Gypsy',
            Live: 'https://pure-peak-95833.herokuapp.com/'

        },
        {
            title: 'Socializer',
            description: 'API for a social network',
            imgUrl: social,
            Github: 'https://github.com/Salissa4/Socializer',
            Live: 'https://drive.google.com/file/d/1hywBMTILHrNyFa_K2moq7xomBjJd1lbR/view',
        },
        {
            title: 'NoteTaker',
            description: 'Express.js Back End App',
            imgUrl: note,
            Github: 'https://github.com/Salissa4/NoteTaker',
            Live: 'https://murmuring-brook-69476.herokuapp.com/',
        },
        {
            title: 'JATE',
            description: 'PWA',
            imgUrl: jate,
            Github: 'https://github.com/Salissa4/TextEdit',
            Live: 'https://calm-shelf-68858.herokuapp.com/',
        },
    ];

    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) => 
                            <div className={isVisible ? 'animate__animated animate__fadeIn': ''}>
                                <h2>Projects</h2>
                                <Tab.Container id='project-tabs' defaultActiveKey='first'>
                                    <Nav variant='pills' className='nav-pills mb-5' id='pills-tab'>
                                        <Nav.Item>
                                            <Nav.Link eventKey='first'>One</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey='second'>Two</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey='third'>Three</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id='slideInUp' className={ isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey='first'>
                                            <Row>
                                                {projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard key={index}{...project}/>
                                                    )
                                                })}
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='second'>Coming Soon</Tab.Pane>
                                        <Tab.Pane eventKey='third'>Coming Soon</Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt=''></img>
        </section>
    )
}