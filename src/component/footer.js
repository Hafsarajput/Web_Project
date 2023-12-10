import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/footer.css';

import Doogy from '../component/assets/images/doggy.png';
import Handcake from '../component/assets/images/cake.png';
import Mobile from '../component/assets/images/phone.png';

const Footer = () => {
    return (
        <>
            <div className="first-div">
                <div className="second-div">
                    <h6 className="about-header">About BlissBloom</h6>
                    <p className="about-paragraph">
                        BlissBloom is a digital oasis dedicated to cultivating joy and inspiration in every facet of life. Our blog is a sanctuary where mindfulness meets everyday magic, exploring wellness, creativity, and the beauty found in the simple moments. Dive into a tapestry of articles that celebrate mindful living and the pursuit of a vibrant, fulfilling existence. Join our community, where we embrace the present, nurture passions, and discover the extraordinary in the ordinary. At BlissBloom, we invite you to bloom into your most radiant self, finding joy in the journey every day.
                    </p>
                </div>

                <div className='nav-and-cat'>
                    <div className="second-div">
                        <h6 className="nav-header">Navigations</h6>
                        <ul className="nav-list">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Categories</a>
                            </li>
                            <li>
                                <a href="#">Single Post</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="third-div">
                        <h6 className="categories-header">Categories</h6>
                        <ul className="categories-list">


                            <li>
                                <a href="#">Business</a>
                            </li>
                            <li>
                                <a href="#">Sports</a>
                            </li>
                            <li>
                                <a href="#">Foods</a>
                            </li>
                            <li>
                                <a href="#">Politics</a>
                            </li>
                            <li>
                                <a href="#">Celebrity</a>
                            </li>
                        </ul>
                    </div>


                </div>


                <div className="fourth-div">
                    <h6 className="recent-posts">Recent Posts</h6>


                    <Row className='row'>
                        <Col className='img'>
                            <img src={Doogy} alt='Doggy' />
                        </Col >
                        <Col className='col'>
                            <p>CULTURE . Jul 5th '22</p>
                            <a href='#'>5 Great Startup Tips for Female Founders</a>
                        </Col>
                    </Row>

                    <Row className='row'>
                        <Col className='img'>
                            <img src={Handcake} alt='HandCake' />
                        </Col>
                        <Col className='col'>
                            <p>CULTURE . Jul 5th '22</p>
                            <a href='#'>What is the son of Football Coach John Gruden,
                                Deuce Gruden doing Now?</a>
                        </Col>
                    </Row>

                    <Row className="row">
                        <Col className='img'>
                            <img src={Mobile} alt='Mobile' />
                        </Col>
                        <Col className="col">
                            <p>CULTURE . Jul 5th '22</p>
                            <a href='#'>How to Avoid Distraction and Stay Focused During
                                Video Calls?</a>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="copyright-div">
                <div className="social-icons">
                    <i className="bi bi-c-circle"></i>
                </div>
                <p className="copyright-text">Copyright BlissBloom. All Rights Reserved</p>
                <div className="social-icons">
                    <i className="bi bi-twitter-x"></i>
                </div>
                <div className="social-icons">
                    <i className="bi bi-instagram"></i>
                </div>
                <div className="social-icons">
                    <i className="bi bi-linkedin"></i>
                </div>
            </div>
        </>

    );
};

export default Footer;