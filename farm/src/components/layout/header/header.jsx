import React from "react";
import Logo from "../../ui/logo/logo";
import Button from "../../ui/button/button";

import { StyledHeader } from "./styled";

function Header() {
  return <StyledHeader>
    <Logo></Logo>
    <Button>Купить</Button>
  </StyledHeader>;
}

export default Header;