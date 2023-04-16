import React from "react";
import { CustomButton } from "./Button.styles";

function Button({ onClick, children }) {
  return <CustomButton onClick={onClick}>{children} </CustomButton>;
}

export default Button;
