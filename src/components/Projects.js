import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/images/color-sharp2';

export const Projects = () => {
    const projects = [
        {
            title: "Bored No Mo",
            description: "Interactive front end application",
            imgUrl: projImg1,
        },
        {
            title: "Gypsy",
            description: "Full Stack Application",
            imgUrl: projImg2,
        },
        {
            title: "Socializer",
            description: 'API for a social network',
            imgUrl: projImg3,
        },
        {
            title: "NoteTaker",
            description: 'Express.js Back End App',
            imgUrl: projImg4,
        },
        {
            title: "Team Profile Generator",
            description: '',
            imgUrl: projImg5,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <Tab.Container id='project-tabs' defaultActiveKey='first'>
                        <Nav variant="pills" defaultActiveKey="/home">
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
                        <Tab.Content>
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
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=''></img>
        </section>
    )
}