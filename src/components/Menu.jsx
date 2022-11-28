import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu(){
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#/">QuickCheck</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#/">Inicio</Nav.Link>
                <Nav.Link href="#/equipo">Equipos</Nav.Link>
                <Nav.Link href="#/usuarios">Usuarios</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#/equipo">Equipos</NavDropdown.Item>
                  <NavDropdown.Item href="#/usuarios">Usuarios</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#/">
                    Inicio
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );

}
export{Menu}