import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

const Card = ({ header, children }) => {
  const headerMarkdown = header ? (
    <BootstrapCard.Header>{header}</BootstrapCard.Header>
  ) : null;

  const bodyMarkdown = children ? (
    <BootstrapCard.Body>{children}</BootstrapCard.Body>
  ) : null;
  return (
    <BootstrapCard>
      {headerMarkdown}
      {bodyMarkdown}
    </BootstrapCard>
  );
};

export default Card;
