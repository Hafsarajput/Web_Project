import Badge from 'react-bootstrap/Badge';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './assets/images/doggy.png';
import Image2 from './assets/images/cake.png';
import Image3 from './assets/images/phone.png';

const App = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', textAlign: 'left', paddingTop: '50px', backgroundColor: '#222222', minHeight: '50vh', color: 'white' }}>
        <div style={{ flex: 1, padding: '0 20px' }}>
          <h6 style={{ fontFamily: 'EB Garamond, serif', fontSize: '20px', marginBottom: '10px' }}>About BlissBloom</h6>
          <p style={{ fontFamily: 'EB Garamond, serif', fontSize: '15px', lineHeight: '1.6' }}>
            BlissBloom is a digital oasis dedicated to cultivating joy and inspiration in every facet of life. Our blog is a sanctuary where mindfulness meets everyday magic, exploring wellness, creativity, and the beauty found in the simple moments. Dive into a tapestry of articles that celebrate mindful living and the pursuit of a vibrant, fulfilling existence. Join our community, where we embrace the present, nurture passions, and discover the extraordinary in the ordinary. At BlissBloom, we invite you to bloom into your most radiant self, finding joy in the journey every day.
          </p>
        </div>

        <div style={{ flex: 1, padding: '0 20px' }}>
          <h6 style={{ fontFamily: 'EB Garamond, serif', fontSize: '20px', marginBottom: '10px' }}>Navigations</h6>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '5px' }}>Home</li>
            <li style={{ marginBottom: '5px' }}>Blog</li>
            <li style={{ marginBottom: '5px' }}>Categories</li>
            <li style={{ marginBottom: '5px' }}>Single Post</li>
            <li style={{ marginBottom: '5px' }}>About Us</li>
            <li style={{ marginBottom: '5px' }}>Contact</li>
          </ul>
        </div>

        <div style={{ flex: 1, padding: '0 20px' }}>
          <h6 style={{ fontFamily: 'EB Garamond, serif', fontSize: '20px', marginBottom: '10px' }}>Categories</h6>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '5px' }}>Business</li>
            <li style={{ marginBottom: '5px' }}>Sports</li>
            <li style={{ marginBottom: '5px' }}>Foods</li>
            <li style={{ marginBottom: '5px' }}>Politics</li>
            <li style={{ marginBottom: '5px' }}>Celebrity</li>
          </ul>
        </div>

        <div style={{ flex: 1, padding: '0 20px' }}>
          <h6 style={{ fontFamily: 'EB Garamond, serif', fontSize: '20px', marginBottom: '10px' }}>Recent Posts</h6>
          <Container>
            <Row className='align-items-center'>
              <Col xs={12} md={4}>
                <img src={Image} alt='' style={{ maxWidth: '50px', height: 'auto' }} />
              </Col>
              <Col xs={12} md={8}>
                <p style={{ fontSize: '10px', marginBottom: '5px' }}>CULTURE . Jul 5th '22</p>
                <p style={{ fontSize: '15px', marginBottom: '20px' }}>5 Great Startup Tips for Female Founders</p>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row className='align-items-center'>
              <Col xs={12} md={4}>
                <img src={Image2} alt='' style={{ maxWidth: '50px', height: 'auto' }} />
              </Col>
              <Col xs={12} md={8}>
                <p style={{ fontSize: '10px', marginBottom: '5px' }}>CULTURE . Jul 5th '22</p>
                <p style={{ fontSize: '15px', marginBottom: '20px' }}>What is the son of Football Coach John Gruden,
Deuce Gruden doing Now?</p>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row className='align-items-center'>
              <Col xs={12} md={4}>
                <img src={Image3} alt='' style={{ maxWidth: '50px', height: 'auto' }} />
              </Col>
              <Col xs={12} md={8}>
                <p style={{ fontSize: '10px', marginBottom: '5px' }}>CULTURE . Jul 5th '22</p>
                <p style={{ fontSize: '15px', marginBottom: '20px' }}>How to Avoid Distraction and Stay Focused During
Video Calls?</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default App;
