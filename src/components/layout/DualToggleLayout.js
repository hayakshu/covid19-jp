import React, { useState } from 'react';
import { DualButtonSwitch } from '../switch';

const DualToggleLayout = ({
  leftSide,
  rightSide,
  leftToggleText,
  rightToggleText,
}) => {
  const [isLeft, setIsLeft] = useState(true);

  const onDualButtonChange = event => {
    if (event.target.value) {
      setIsLeft(false);
      return;
    }
    setIsLeft(true);
  };
  const body = isLeft ? leftSide : rightSide;

  return (
    <>
      <div className="text-center">
        <DualButtonSwitch
          className="mb-3"
          left={leftToggleText}
          right={rightToggleText}
          onChange={onDualButtonChange}
        />
      </div>
      {body}
    </>
  );
};

export default DualToggleLayout;
