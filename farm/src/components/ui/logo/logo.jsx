import React from "react";
import logo from '../../../assets/logo.png';

import { StyledLink, StyledImage, StyledSpan } from "./styled";

function Logo() {
    return (<>
        <StyledLink href="/" className="logo__link">
            <StyledImage src={logo} alt="логотип"></StyledImage>
            <StyledSpan className="logo__text">Фермерские продукты</StyledSpan>
        </StyledLink>
    </>)
}

export default Logo;
