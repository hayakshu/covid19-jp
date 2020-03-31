import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { GoMarkGithub, GoGlobe, GoInfo, GoHome } from 'react-icons/go';
import { withTranslation } from 'react-i18next';
import LangLink from './LangLink';
import Link from './Link';
import RouteLink from './RouteLink';

const Navigation = ({ t }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>COVID19-JP</Navbar.Brand>
    <Nav className="ml-right">
      <RouteLink path="/">
        <GoHome size={20} />
      </RouteLink>
      <RouteLink path="/faq">
        <GoInfo size={20} />
      </RouteLink>
    </Nav>
    <Nav className="ml-auto" defaultActiveKey="jp">
      <Link path="https://github.com/">
        <GoMarkGithub size={20} />
      </Link>
      <NavDropdown title={<GoGlobe size={20} />} id="nav-dropdown" alignRight>
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
