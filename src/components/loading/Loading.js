import React from 'react';
import { CenteredFlexContainer } from '../layout';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <CenteredFlexContainer className="vh-100">
      <Spinner as="span" animation="border" size="lg" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </CenteredFlexContainer>
  );
};

export default Loading;
