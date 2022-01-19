import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  Col,
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Row,
} from 'reactstrap'

import images from '../../Assets/images'

interface Props {
  collapsed: boolean
  toggleNavbar: () => void
  socialLinks: any[]
}

const Header = ({ collapsed, toggleNavbar, socialLinks }: Props) => {
  return (
    <header>
      <Navbar color="dark" dark>
        <Container>
          <Collapse isOpen={!collapsed} navbar>
            <Row>
              <Col sm="8" md="7" className="py-4">
                <Link to="/about" style={{ textDecoration: 'none' }}>
                  <h4 className="text-white">About</h4>
                </Link>
                <p className="text-muted">
                  Add some information about the album below, the author, or any
                  other background context. Make it a few sentences long so
                  folks can pick up some informative tidbits. Then, link them
                  off to some social networking sites or contact information.
                </p>
              </Col>
              <Col sm="4" md={{ offset: 1 }} className="py-4">
                <ul className="list-unstyled">
                  <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <h4 className="text-white">Contact</h4>
                  </Link>
                  {socialLinks.map((link, key) => {
                    return (
                      <li key={key}>
                        <a href={link.url} className="text-white">
                          {link.text}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </Col>
            </Row>
          </Collapse>
          <NavbarBrand href="/" className="d-flex align-items-center mr-auto">
            <img
              src={images.logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
