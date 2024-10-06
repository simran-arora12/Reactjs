import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
// import React from 'react';

function Simran(){
    return(
        <>
         <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MyReactApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3">
                Something else here
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Simran