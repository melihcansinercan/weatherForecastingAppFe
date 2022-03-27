import React from 'react'
import { Navbar, Container, NavDropdown } from 'react-bootstrap';


export default function Menu(){

    return(
        <Navbar  bg="primary" variant="dark">
  <Container>
    <Navbar.Brand href="#home">Weather App</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <NavDropdown title={
        <Navbar.Text>
        Signed in as: <a disabled>{window.sessionStorage.getItem("userName")}</a>
      </Navbar.Text>
    } id="collasible-nav-dropdown">
        <NavDropdown.Item href="/">Log Out</NavDropdown.Item>
      </NavDropdown>

    </Navbar.Collapse>
  </Container>
</Navbar>        
)
}

