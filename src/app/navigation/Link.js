import React from 'react';
import { Nav } from 'react-bootstrap';

const Link = ({ path, children, ...props }) => (
  <Nav.Link {...props} href={path}>
    {children}
  </Nav.Link>
);

export default Link;
