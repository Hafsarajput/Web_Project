import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="blissbloom-brand">BlissBloom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mr-auto" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home" style={{ color: 'black' }}>Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" style={{ color: 'black' }}>Single Post</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Categories" id="basic-nav-dropdown" style={{ color: 'black' }}>
              <NavDropdown.Item href="#" style={{ color: 'black' }}>Business</NavDropdown.Item>
            
            </NavDropdown>
            <Nav.Item>
              <Nav.Link eventKey="link-3" style={{ color: 'black' }}><Link to ={"/about"}>AboutUs</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" style={{ color: 'black' }}>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
