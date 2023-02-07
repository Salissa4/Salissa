import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import meter1 from '../assets/images/meter1.svg';
import meter2 from '../assets/images/meter2.svg';
import colorSharp from '../assets/images/color-sharp.png';

export default function Skills () {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={meter2} alt='img' />
                                    <h5>R</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt='img' />
                                    <h5>MERN</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt='img' />
                                    <h5>Javascript</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt='img' />
                                    <h5>Node</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt='img' />
                                    <h5>Express</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt='img' />
                                    <h5>REST API</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt='img' />
                                    <h5>Graph QL</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt='img' />
                                    <h5>MySQL</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt=''/>
        </section>
      )
} 