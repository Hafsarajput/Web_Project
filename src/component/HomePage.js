import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import img1 from '../component/assets/images/carosel1.png';
import img2 from '../component/assets/images/carosel2.jpg';
import img3 from '../component/assets/images/carosel3.jpg';
import img4 from '../component/assets/images/AllinOne.png';
import img5 from '../component/assets/images/Dog.png';
import img6 from '../component/assets/images/cameron.png';
import cakeImg from '../component/assets/images/cake.png';
import something from '../component/assets/images/Something.png';
import design from '../component/assets/images/Design.png';
import tablet from '../component/assets/images/Tablet.png';
import parents from '../component/assets/images/Parents.png';
import girl from '../component/assets/images/girl.png';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
import '../component/HomePage.css';
function HomePage() {
    return (
        <div>
            <Container className='container-1'>
                <Carousel slide={false} >
                    <Carousel.Item>
                        <img src={img1} alt='Photos' className='images' />
                        <Carousel.Caption>
                            <h3>Tech Elegance: A Glimpse into the Digital World</h3>
                            <p>Dive into the sleek and modern allure of our everyday companion – the mobile phone. This photo captures the essence of connectivity and innovation in the palm of your hand, showcasing the seamless blend of technology and design. Join me in appreciating the beauty of our digital age through this snapshot of a versatile and indispensable device.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img2} alt='Photos' className='images' />
                        <Carousel.Caption>
                            <h3>Nature's Jewels: Raindrops Adorning Autumn Leaves</h3>
                            <p>Capturing the delicate beauty of rain-kissed leaves in the heart of fall. Each water droplet becomes a glistening gem, transforming the ordinary into a mesmerizing spectacle of nature's artistry. Join me on this visual journey as we explore the enchanting details that rain brings to the autumnal tapestry</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img3} alt='Photos' className='images' />
                        <Carousel.Caption>
                            <h3>Evening Hues: A Mountain Stroll with Sunset Glow</h3>
                            <p>
                                Embark on a tranquil journey as we follow a lone adventurer walking against the stunning canvas of a mountain sunset. The warm hues of the evening sun cast a golden glow, illuminating the path of someone with a backpack, creating a serene silhouette against the majestic backdrop. Join me in embracing the serenity of nature's farewell to the day.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

            <Container>
                <img src={img4} alt='Photos' className="img-fluid w-100" />
            </Container>

            <Container>
                <Row className='Row'>
                    <Col className='Col-1'  >
                        <img src={img5} alt='Photo 5' />
                        <h6>CULTURE . Jul 5th '22</h6>
                        <h3>11 Work From Home
                            Part-Time Jobs You Can
                            Do Now</h3>

                        <p>In today's dynamic work landscape, the option to work from home has become increasingly popular, offering individuals the flexibility to balance their professional and personal lives. If you're looking for part-time opportunities that allow you to work remotely, here are 11 diverse options to consider. Whether you're a student, a parent, or someone seeking supplementary income, these jobs provide a range of possibilities to suit various skill sets and interests.</p>

                        <div className='editor'>
                            <img src={img6} alt='6th  img' />
                            <h6>Cameron Williamson</h6>
                        </div>
                    </Col>
                    <Col className='col-2' >
                        <div className='card-1'>
                            <img src={cakeImg} alt='Cake img for card' />
                            <h6>SPORT . Jul 5th '22</h6>
                            <h3>Let’s Get Back to Work, New
                                York</h3>

                        </div>

                        <div className='card-1'>
                            <img src={something} alt='Something' />
                            <h6>FOOD . Jul 17th '22</h6>
                            <h3>How to Avoid Distraction and
                                Stay Focused During Video
                                Calls?</h3>

                        </div>

                        <div className='card-1'>
                            <img src={design} alt='Mirror photo' />
                            <h6>DESIGN . Mar 15th '22</h6>
                            <h3>Why Craigslist Tampa Is One
                                of The Most Interesting Places
                                On the Web?</h3>

                        </div>
                    </Col>



                    <Col className='col-2'>
                        <div className='card-1'>
                            <img src={tablet} alt='Cake img for card' />
                            <h6>BUSINESS . Jul 5th '22</h6>
                            <h3>6 Easy Steps To Create Your
                                Own Cute Merch For
                                Instagram</h3>

                        </div>

                        <div className='card-1'>
                            <img src={parents} alt='Something' />
                            <h6>TECH . Mar 1st '22</h6>
                            <h3>10 Life-Changing Hacks Every
                                Working Mom Should Know</h3>

                        </div>

                        <div className='card-1'>
                            <img src={girl} alt='Mirror photo' />
                            <h6>TRAVEL . Jul 5th '22</h6>
                            <h3>5 Great Startup Tips for
                                Female Founders</h3>

                        </div>
                    </Col>


                    <Col>
                        <ListGroup className='col-3'>
                            <ListGroup.Item className='header'>
                                <h3>Trending</h3>
                            </ListGroup.Item>
                            <ListGroup.Item className='content'>
                                <h6>The Best Homemade Masks
                                    for Face (keep the Pimples
                                    Away)</h6>

                                <p>Jane Cooper</p>
                            </ListGroup.Item>
                            <ListGroup.Item className='content'>
                                <h6>17 Pictures of Medium
                                    Length Hair in Layers That
                                    Will Inspire Your New
                                    Haircut</h6>

                                <p>Wade Warren</p>
                            </ListGroup.Item>

                            <ListGroup.Item className='content'>
                                <h6>13 Amazing Poems from Shel
                                    Silverstein with Valuable Life
                                    Lessons</h6>

                                <p>Esther Howard</p>
                            </ListGroup.Item>

                            <ListGroup.Item className='content'>
                                <h6>9 Half-up/half-down
                                    Hairstyles for Long and
                                    Medium Hair</h6>

                                <p>Cameron Williamson</p>
                            </ListGroup.Item>

                            <ListGroup.Item className='content'>
                                <h6>Life Insurance And
                                    Pregnancy: A Working
                                    Mom’s Guide</h6>

                                <p>Jenny Wilson</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;