import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from './assets/images/cater.png';
import Image2 from './assets/images/office.png';
import Image3 from './assets/images/fm.png';
import Image4 from './assets/images/free.png';

const ScreenDivision = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={6}>
          {/* First division */}
          <Container fluid>
            <Row className="align-items-center">
              <Col sm={6}>
                {/* Image */}
                <img
                  src={Image}
                  alt=''
                  style={{ maxWidth: '150%', height: 'auto', paddingTop: '70px' }}
                />
              </Col>
              <Col sm={6}>
                {/* Text */}
                <h3 style={{ fontFamily: 'EB Garamond, serif', fontSize: '40px', paddingTop: '80px', textAlign: 'center', paddingLeft: '30%' }}>
                  <b>Keep your<br />Business organized<br />and on track.</b>
                </h3>
              </Col>
              <p style={{ fontFamily: 'EB Garamond, serif', fontSize: '20px', paddingTop: '80px',  paddingLeft: '15%' }}><b>CATEGORY : BUSINESS</b></p>
            </Row>
           {/* cat 1 */}
            <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={4}>
            <img src={Image2} alt='' style={{ maxWidth: '300px', height: 'auto' }} />
          </Col>
          <Col xs={12} md={8}>
            <p style={{ fontSize: '10px', marginBottom: '5px', paddingLeft:'100px' }}>CULTURE . Jul 5th '22</p>
            <p style={{ fontSize: '15px', marginBottom: '20px' , paddingLeft:'100px' }}>How To Keep Track Of Your Business Finances</p>
            <p style={{ fontSize: '10px', marginBottom: '20px', paddingLeft:'100px' }}>One of the essential elements of running a successful company is tracking business finances, which involves keeping tabs on business income and expense</p>


          </Col>
        </Row>
      </Container>
 {/* cat 2 */}
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={4}>
            <img src={Image3} alt='' style={{ maxWidth: '300px', height: 'auto' }} />
          </Col>
          <Col xs={12} md={8}>
            <p style={{ fontSize: '10px', marginBottom: '5px', paddingLeft:'100px' }}>CULTURE . Jul 5th '22</p>
            <p style={{ fontSize: '15px', marginBottom: '20px' , paddingLeft:'100px'}}>What Startups Can Learn From The Family Business Model</p>
            <p style={{ fontSize: '10px', marginBottom: '20px', paddingLeft:'100px' }}>In the UK, there are 4.8 million family businesses. That’s a whopping 88% of all companies in the country.</p>

          </Col>
        </Row>
      </Container>
 {/* cat 3 */}
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={4}>
            <img src={Image4} alt='' style={{ maxWidth: '300px', height: 'auto' }} />
          </Col>
          <Col xs={12} md={8}>
            <p style={{ fontSize: '10px', marginBottom: '5px', paddingLeft:'100px' }}>CULTURE . Jul 5th '22</p>
            <p style={{ fontSize: '15px', marginBottom: '20px', paddingLeft:'100px' }}>7 Ways Fun Promotional Products Can Help Your StartUp Make its Mark</p>
            <p style={{ fontSize: '10px', marginBottom: '20px', paddingLeft:'100px' }}>Fun promotional products are essential marketing tools for any business. But they’re especially effective for startup companies.</p>

          </Col>
        </Row>
      </Container>
          </Container>
          <div style={{ height: '200px', paddingLeft: '100px' }}></div>
        </Col>

        {/* Second division moved to the right */}
        <Col sm={6}>
          <div style={{ height: '200px',   textAlign: 'right' , paddingTop:'20px' }}>
            {/* Division with three columns */}
            <p><b><u>Popular</u></b></p>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ScreenDivision;
