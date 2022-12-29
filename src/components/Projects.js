import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/images/color-sharp2.png';
import projImg1 from '../assets/images/projImg1.png';
import projImg2 from '../assets/images/projImg2.png';
import projImg3 from '../assets/images/projImg3.png';
import projImg4 from '../assets/images/projImg4.png';
import projImg5 from '../assets/images/projImg5.png';
import projImg6 from '../assets/images/projImg6.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Projects () {
    const projects = [
        {
            title: 'Bored No Mo',
            description: 'Interactive front end application',
            imgUrl: projImg1,
            Github: 'https://github.com/Salissa4/BoredNoMo',
            Live: 'https://catpolk.github.io/Bored-NO-MO-project-1/',
        },
        {
            title: 'Gypsy',
            description: 'Full Stack Application',
            imgUrl: projImg2,
            Github:'https://github.com/Salissa4/Gypsy',
            Live: 'https://pure-peak-95833.herokuapp.com/'

        },
        {
            title: 'Socializer',
            description: 'API for a social network',
            imgUrl: projImg3,
            Github: 'https://github.com/Salissa4/Socializer',
            Live: 'https://drive.google.com/file/d/1hywBMTILHrNyFa_K2moq7xomBjJd1lbR/view',
        },
        {
            title: 'NoteTaker',
            description: 'Express.js Back End App',
            imgUrl: projImg4,
            Github: 'https://github.com/Salissa4/NoteTaker',
            Live: 'https://murmuring-brook-69476.herokuapp.com/',
        },
        {
            title: 'Team Profile Generator',
            description: 'OOP Team Profile Generator',
            imgUrl: projImg5,
            Github: 'https://github.com/Salissa4/Team-Profile-Generator',
            Live: 'https://drive.google.com/file/d/1xt1VxOOBLF4myn_iY7OfrVdl3Q2HCNn1/view',
        },
        {
            title: 'Tech Blog',
            description: 'Model View Controller',
            imgUrl: projImg6,
            Github: 'https://github.com/Salissa4/TechBlog',
            Live: 'https://agile-everglades-05325.herokuapp.com/',
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