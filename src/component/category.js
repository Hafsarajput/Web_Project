import { Container, Row, Col,ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './assets/images/cater.png';



const YourComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
        <img src={Image} alt='' style={{ maxWidth: '400px', height: 'auto', paddingTop: '70px' }} />
        </Col>
        <Col>
        <h3 style={{ fontFamily: 'EB Garamond, serif', fontSize: '40px', maxWidth: '400px', height: 'auto', paddingTop: '100px', textAlign: 'center' }}>
  <b>Keep your<br />Business organized<br />and on track.</b>
</h3>
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
  );
};

export default YourComponent;
