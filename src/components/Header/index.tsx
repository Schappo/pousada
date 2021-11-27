import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <Navbar>
        <Container className="nav-bar">
          <Navbar.Brand href="#home">Residencial Schappo</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/teste"><span className="link">Fotos</span></Nav.Link>
            <Nav.Link href="#home"><span className="link">Apartamento</span></Nav.Link>
            <Nav.Link href="#home"><span className="link">Como Chegar</span></Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
