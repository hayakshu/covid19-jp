import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Link from './Link';

const RouteLink = ({ path, children, ...props }) => {
  return (
    <LinkContainer exact to={path}>
      <Link {...props}>{children}</Link>
    </LinkContainer>
  );
};

export default RouteLink;
