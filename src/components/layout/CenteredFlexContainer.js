import React from 'react';

const CenteredFlexContainer = ({ children, className, ...props }) => {
  const classNames = [
    className,
    'd-flex justify-content-center align-items-center',
  ].join(' ');
  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  );
};

export default CenteredFlexContainer;
