import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const RouteLink = ({ path, children, ...props }) => {
  return (
    <LinkContainer exact to={path}>
      <Nav.Link {...props}>{children}</Nav.Link>
    </LinkContainer>
  );
};

export default RouteLink;
