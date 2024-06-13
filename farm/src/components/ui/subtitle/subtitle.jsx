import React from "react";
import { StyledSubitle } from "./styled";

function Subitle({ children, color }) {
    return <StyledSubitle color={color}>{children}</StyledSubitle>;
}

export default Subitle;
