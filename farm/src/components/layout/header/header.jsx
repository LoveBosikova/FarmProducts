import React from "react";
import Logo from "../../ui/logo/logo";
import Button from "../../ui/button/button";

import "./style.css";

function Header() {
  return <header className="header">
  <Logo></Logo>
  <Button>Купить</Button>
  </header>;
}

export default Header;