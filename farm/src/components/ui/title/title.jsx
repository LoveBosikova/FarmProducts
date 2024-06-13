import React from "react";
import { StyledTitle } from "./styled";

function Title({ children, size }) {
    return <StyledTitle size={size}>{children}</StyledTitle>;
}

export default Title;
