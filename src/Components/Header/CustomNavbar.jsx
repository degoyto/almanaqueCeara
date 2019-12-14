import React, { Component } from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    const estilo={color: '#f1f1f1', }
    return (
      <Container fluid className="fundo">
        <Container className="menu">
          <div className="image">
            <Link to="/">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/logoBird.png?alt=media&token=175b9b9e-863f-4fa3-ac21-068d849b8dc0"
                
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </div>
          <div className="menuzinho">
            <Navbar  expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link eventKey={1} componentClass={Link} href="/" to="/" style={estilo}>Home</Nav.Link>
                  <Nav.Link eventKey={2} componentClass={Link} href="/projetos" to="/projetos" style={estilo}>Projetos</Nav.Link>
                  <Nav.Link eventKey={3} componentClass={Link} href="/assets" to="/assets" style={estilo}>Assets</Nav.Link>   
                  <Nav.Link eventKey={4} componentClass={Link} href="/enviar" to="/enviar" style={estilo}>Enviar</Nav.Link>       
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          
        </Container>
        
      </Container>
      
    )
  }
}