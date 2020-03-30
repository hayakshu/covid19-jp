import React from "react";
import { ToggleButtonGroup } from "react-bootstrap";
import NoShadowPrimaryToggleButton from "./NoShadowPrimaryToggleButton";

const DualButtonSwitch = ({ left, right, onChange, ...props }) => {
  return (
    <ToggleButtonGroup
      name="dual-button-toggle"
      type="radio"
      defaultValue={""}
      {...props}
    >
      <NoShadowPrimaryToggleButton value={""} onChange={onChange} size="sm">
        {left}
      </NoShadowPrimaryToggleButton>
      <NoShadowPrimaryToggleButton value={"1"} onChange={onChange} size="sm">
        {right}
      </NoShadowPrimaryToggleButton>
    </ToggleButtonGroup>
  );
};

export default DualButtonSwitch;
