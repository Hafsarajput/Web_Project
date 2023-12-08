import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function BasicExample() {
  return (
    <div>
      <div style={{ textAlign: 'center', paddingTop: '30px', fontFamily: 'EB Garamond, serif', fontSize: '50px' }}>
        Contact Us
      </div>

      <div className="container mt-5">
        <Row className="justify-content-center">
          <Col md={4} sm={12} className="text-center mb-4">
            <i className="bi bi-geo-alt" style={{ fontSize: '5em' }}></i>
            <h6 style={{ fontFamily: 'EB Garamond, serif', fontSize: '25px', marginTop: '10px' }}>Address</h6>
            <h6 style={{ fontFamily: 'EB Garamond, serif' }}>Sukkur IBA University</h6>
          </Col>

          <Col md={4} sm={12} className="text-center mb-4">
            <i className="bi bi-phone" style={{ fontSize: '5em' }}></i>
            <h6 style={{ fontFamily: 'EB Garamond, serif', fontSize: '25px', marginTop: '10px' }}>Phone Number</h6>
            <h6 style={{ fontFamily: 'EB Garamond, serif' }}>0300-0000000</h6>
          </Col>

          <Col md={4} sm={12} className="text-center mb-4">
            <i className="bi bi-envelope" style={{ fontSize: '5em' }}></i>
            <h6 style={{ fontFamily: 'EB Garamond, serif', fontSize: '25px', marginTop: '10px' }}>Email</h6>
            <h6 style={{ fontFamily: 'EB Garamond, serif' }}>Blissbloom@gmail.com</h6>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8} sm={12}>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control type="name" placeholder="Your Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control placeholder="Subject" style={{ height: '100px' }} />
              </Form.Group>

              <div className="text-center" style={{marginBottom:'20px'}}>
                <Button variant="dark" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default BasicExample;
