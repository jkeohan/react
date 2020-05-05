import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem
} from 'reactstrap'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <header>
      <Navbar color="black" light expand="md">
        <Link to="/" className="title">
          Answer10
        </Link>
        <NavbarToggler id="toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav-list" navbar>
            <Link to="/game">Game</Link>
            <Link to="/instructions">Instructions</Link>
            <Link to="/options">Options</Link>
            <Link to="/leaderboard">Leaderboard</Link>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Header
