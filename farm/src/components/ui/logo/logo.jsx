import React from "react";
// import logo from "/src/assets/logo.svg";
import logo from '../../../assets/logo.png';

import style from "./style.css"

function Logo() {
    return (<>
        <a href="/" className="logo__link">
            <img src={logo} alt="логотип" />
            <span className="logo__text">Фермерские продукты</span>
        </a>
    </>)
}

export default Logo;
