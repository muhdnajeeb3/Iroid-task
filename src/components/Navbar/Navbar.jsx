import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css"

function NavbarMain() {
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container style={{display:"flex",justifyContent:"space-between"}}>
        <Navbar.Brand href="/" className='logo'>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="linkcontainer collapse navbar-collapse">
          <Nav   style={{color:"yellow"}}>
            <Nav.Link href="/home" id="basic-nav-dropdown" >HOME</Nav.Link>
            <NavDropdown title="MEN" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>              
            </NavDropdown>
            <NavDropdown title="WOMEN" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>              
            </NavDropdown>
            <NavDropdown title="GIRLS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>              
            </NavDropdown>
            <NavDropdown title="BOYS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <FontAwesomeIcon icon={faSearch} className="searchicon"/>
        <FontAwesomeIcon icon={faCartShopping} className="carticon" />
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarMain