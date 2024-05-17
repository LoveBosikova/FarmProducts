import React from "react";

import Title, { TitleSize } from "../../ui/title/title";
import Subitle, { SubitleColor } from "../subtitle/subtitle";

import eat1 from '../../../assets/logo.png';

function AdvantageCard() {
    return <>
        <header>
            <picture className="advantage__imgWrap">
                <img src={eat1} alt={eat1} />
            </picture>
            <div className="advantage__textWrap">
                <Title size={TitleSize.SMALL}>Еда намного вкуснее</Title>
                <Subitle color={SubitleColor.GREEN}>Фермерские продукты</Subitle>
            </div>
        </header>
        <p>Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники!
        </p>
    </>;
}

export default AdvantageCard;
