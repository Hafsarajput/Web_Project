import ZaynImg from '../component/assets/images/Zayn.png';
import Hafsa from '../component/assets/images/Hafsa.png';
import purva from '../component/assets/images/purva.png';
import AboutUss from '../component/assets/images/AboutUs.png';
import MissionvisionImg from '../component/assets/images/mission and vision.jpg';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import '../component/AboutUs.css';


function AboutUs() {
    return (
        <>
            <Container className='container'>
                <div className='heading'>
                    <h1>About Us</h1>
                </div>
                <div className='company-history'>
                    <div className='aboutUs-img'>
                        <img src={AboutUss} alt='About us' />
                    </div>
                    <div className='aboutUs-text'>
                        <h6>
                            ABOUT US
                        </h6>

                        <h3>Company History</h3>
                        <p>BlissBloom was born from a shared vision of two passionate individuals, Sarah and Alex, who sought to create a digital haven that celebrated the beauty of mindful living and the pursuit of joy in everyday experiences. In 2018, the duo, both avid writers and enthusiasts of wellness and creativity, decided to channel their energy into building a platform that would inspire and uplift others. The name "BlissBloom" emerged as a reflection of their belief that joy and personal growth can flourish in even the simplest moments of life. Since its inception, BlissBloom has evolved into a vibrant community, with a diverse tapestry of articles exploring topics ranging from mindfulness and wellness rituals to the enchantment found in ordinary existence. Today, BlissBloom continues to blossom, resonating with readers around the world who seek a source of inspiration and a reminder to find bliss in the unfolding journey of life.</p>
                    </div>


                </div>

                <div className='mission-and-vision'>

                    <div className='mission-text'>
                        <h6>
                            MISSION & VISION
                        </h6>
                        <h3>Mission and Vision</h3>
                        <p>At BlissBloom, our mission is to cultivate a community of individuals dedicated to embracing mindful living and finding joy in the everyday. We strive to inspire and empower our readers to prioritize wellness, nurture their passions, and discover beauty in simplicity. Through thoughtful and engaging content, we aim to be a source of inspiration, encouraging personal growth and a deeper connection to the present moment.</p>

                        <p>Our vision for BlissBloom is to be a beacon of positivity and inspiration, fostering a global community that values the pursuit of happiness and personal fulfillment. We envision a platform where individuals from all walks of life come together to share experiences, support each other's journeys, and celebrate the beauty inherent in each moment. BlissBloom aims to be a catalyst for positive change, encouraging a mindset shift towards mindful, joyful living in an ever-evolving world.</p>
                    </div>


                    <div className='mission-img'>
                        <img src={MissionvisionImg} alt='Mission and vission img' />
                    </div>

                </div >


                <div className='our-team'>
                    <div className='team-dis'>
                        <h3>Our Team</h3>
                        <p>BlissBloom thrives on the synergy of our diverse team, united by a shared commitment to inspire joy and mindfulness. Each member brings unique expertise and passion to our collaborative effort in crafting content that resonates with our global community. Together, we embody the essence of BlissBloom's mission to celebrate the beauty of everyday living.</p>
                    </div>

                    <Row className='row'>
                        <Col xs={6} md={4} className='column'>
                            <Image src={purva} roundedCircle />
                            <h3>Purva Fatimah</h3>
                            <h6>FOUNDER & CEO</h6>
                            <p>As the visionary founder of BlissBloom, Purva laid the foundation for our digital haven. Her passion for mindful living and dedication to spreading joy set the tone for our community. With a keen eye for inspiration, Purva journey in creating BlissBloom reflects her commitment to cultivating a space where happiness flourishes.</p>
                        </Col>
                        <Col xs={6} md={4} className='column'>
                            <Image src={Hafsa} roundedCircle />
                            <h3>Hafsah Rajput</h3>
                            <h6>FOUNDER, VP</h6>
                            <p>Hafsah, our Co-Founder and VP, brings strategic leadership to BlissBloom. With a blend of creativity and organizational acumen, Hafsah shapes the trajectory of our community. Their commitment to fostering a positive, collaborative environment is integral to BlissBloom's evolution as a vibrant hub for mindful living enthusiasts.</p>
                        </Col>
                        <Col xs={6} md={4} className='column'>
                            <Image src={ZaynImg} roundedCircle />
                            <h3>Zain Pathan</h3>
                            <h6>EDITOR STAFF</h6>
                            <p>Meet Zain, the creative force behind BlissBloom's content. With a keen editorial eye and a passion for storytelling, zain leads our talented team of writers and editors. Their commitment to maintaining the highest standards of quality ensures that every article on BlissBloom reflects our mission of inspiring mindful living and joy.</p>
                        </Col>
                    </Row>
                </div>



            </Container >
        </>
    );
}

export default AboutUs;