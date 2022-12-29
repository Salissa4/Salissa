import { Col, Row } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, Github, Live}) => {
    return (
        <Col sm={6} md={4}>
            <div className='proj-imgbx'>
                <img src={imgUrl} alt='' />
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <Row>
                        <a href={Github}>Github</a>
                        <a href={Live}>Live</a>
                    </Row>
                </div>
            </div>
        </Col>
    )
}