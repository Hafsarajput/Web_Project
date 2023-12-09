import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './assets/images/cater.png';

const SplitScreen = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={6}>
        <img src={Image} alt='' style={{ maxWidth: '60px', height: 'auto' }} />
          <div style={{ height: '50vh' }}>
            Left Half
          </div>
        </Col>
        <Col xs={6}>
          {/* Content for the right half */}
          <div style={{ height: '50vh' }}>
            Right Half
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SplitScreen;
