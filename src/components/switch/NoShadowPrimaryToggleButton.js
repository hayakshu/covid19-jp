import React from 'react';
import { ToggleButton } from 'react-bootstrap';

const NoShadowPrimaryToggleButton = ({ className = '', ...props }) => {
  const combinedClassName = [className, 'shadow-none'].join(' ');
  return (
    <ToggleButton
      {...props}
      className={combinedClassName}
      variant="outline-primary"
    />
  );
};

export default NoShadowPrimaryToggleButton;
