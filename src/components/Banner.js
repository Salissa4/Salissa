import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/images/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Banner () {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const [index, setIndex] = useState(1);
    const toRotate = [ ' Software Engineer', 'Full Stack Developer' ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
           tick(); 
        }, delta);

        return () => { clearInterval (ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        } 

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex -1);
            setDelta(period);
        } else if ( isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex +1);
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={ isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className='tagline'>Welcome</span>
                                <h1><span className='txt-rotate' dataPeriod='1000' data-rotate='[ "Software Engineer", "Full Stack Developer"]'><span className='wrap'>{text}</span></span></h1>
                                <p>I am a dynamic and results-driven graduate student pursuing a Master of Science in Computer Science with a specialization in Artificial Intelligence. With a robust background in retail management and a proven track record of exceeding sales targets, seamlessly integrates technical proficiency with strategic planning. Proficient in Python and experienced in full-stack development, I am adept at MERN stack technologies, GraphQL, and database management. As a project lead, I have successfully overseen the development of user-focused applications, showcasing a talent for problem-solving and delivering high-quality solutions. Eager to bring a unique blend of technical expertise and leadership to innovative roles in technology.</p>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={headerImg} alt='header img' />
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

