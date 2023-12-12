import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from './assets/images/cater.png';

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
            <img src={Image} alt='' style={{ maxWidth: '80px', height: 'auto' }} />
          </Col>
          <Col xs={12} md={8}>
            <p style={{ fontSize: '10px', marginBottom: '5px' }}>CULTURE . Jul 5th '22</p>
            <p style={{ fontSize: '15px', marginBottom: '20px' }}>5 Great Startup Tips for Female Founders</p>
          </Col>
        </Row>
      </Container>
 {/* cat 2 */}
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={4}>
            <img src={Image} alt='' style={{ maxWidth: '80px', height: 'auto' }} />
          </Col>
          <Col xs={12} md={8}>
            <p style={{ fontSize: '10px', marginBottom: '5px' }}>CULTURE . Jul 5th '22</p>
            <p style={{ fontSize: '15px', marginBottom: '20px' }}>5 Great Startup Tips for Female Founders</p>
          </Col>
        </Row>
      </Container>
 {/* cat 3 */}
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={4}>
            <img src={Image} alt='' style={{ maxWidth: '80px', height: 'auto' }} />
          </Col>
          <Col xs={12} md={8}>
            <p style={{ fontSize: '10px', marginBottom: '5px' }}>CULTURE . Jul 5th '22</p>
            <p style={{ fontSize: '15px', marginBottom: '20px' }}>5 Great Startup Tips for Female Founders</p>
          </Col>
        </Row>
      </Container>
          </Container>
          <div style={{ height: '200px', paddingLeft: '50px' }}></div>
        </Col>

        {/* Second division moved to the right */}
        <Col sm={6}>
        <div style={{ height: '200px', backgroundColor: 'lightblue', width: '150px', textAlign: 'right' }}>
            {/* Content for the second part */}
            Second Part
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ScreenDivision;
