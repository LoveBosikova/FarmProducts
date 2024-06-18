import React from "react";
import Logo from "../../ui/logo/logo";

import { 
    StyledFooter, 
    FooterText 
} from "./styled";{}

function Footer() {
    return <StyledFooter>
        <Logo></Logo>
        <FooterText>Создано 2024</FooterText>
    </StyledFooter>;
}

export default Footer;