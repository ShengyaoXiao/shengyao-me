import React from "react";

import "./label.css";

const Label = ({
  label,
  minimal,
  selected,
  isCommon,
  onClick = (event) => event,
}) => {
  let className;

  if (isCommon) {
    className = "label common-label";
    if (selected) {
      className += " common-label-selected";
    }
  } else {
    className = "label special-label";
    if (selected) {
      className += " special-label-selected";
    }
  }

  if (minimal) {
    className = "label-minimal";
  }

  return (
    <label
      className={className + " clickable"}
      onClick={(ev) => onClick(label)}
    >
      {label}
    </label>
  );
};

export default Label;

