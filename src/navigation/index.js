import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { GoMarkGithub, GoGlobe } from 'react-icons/go';
import { withTranslation } from 'react-i18next';
import LangLink from './LangLink';
import Link from './Link';

const Navigation = ({ t }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>COVID19-JP</Navbar.Brand>
    <Nav className="ml-auto" defaultActiveKey="jp">
      <Link path="https://github.com/">
        <GoMarkGithub size={24} />
      </Link>
      <NavDropdown title={<GoGlobe size={24} />} id="nav-dropdown" alignRight>
        <NavDropdown.Item as="div">
          <LangLink eventKey="jp">JP</LangLink>
        </NavDropdown.Item>
        <NavDropdown.Item as="div">
          <LangLink eventKey="en">EN</LangLink>
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar>
);

export default withTranslation()(Navigation);
