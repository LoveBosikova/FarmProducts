import React from "react";

import About from "../../blocks/about/about";
import AdvantagesList from "../../blocks/advantages-list/advantages-list";
import advantancies from "../../../mocks/advantancies";

function MainPage() {
    return <>
        <About /> 
        <AdvantagesList advantancies={advantancies}/>
    </>;
}

export default MainPage;
