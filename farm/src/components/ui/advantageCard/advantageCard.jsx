import React from "react";

import Title, { TitleSize } from "../../ui/title/title";
import Subitle, { SubitleColor } from "../subtitle/subtitle";

import "./style.css";

export const AdvantageFeature = {
    BAD: "Магазинные продукты",
    GOOD: "Фермерские продукты"
    };

function AdvantageCard({src, title, mark, desc}) {
    let options;

    switch (mark) {
        case AdvantageFeature.GOOD:
            options = {
            subtitleColor: "green",
            bgColor: "#E1EDCE"
        };
        break;
        case AdvantageFeature.BAD:
        options = {
            subtitleColor: "red",
            bgColor: "#F8DDD7"
        };
        break;
        default:
        options = {
            subtitleColor: "#FFF",
            bgColor: "#FFF"
        };
        break;
        }

    return <li className="advantage__card"
    style={{ backgroundColor: options.bgColor }}>
        <header className="advantage__header">
            <picture className="advantage__imgWrap">
                <img src={src} alt={src} />
            </picture>
            <div className="advantage__textWrap">
                <Subitle color={options.subtitleColor}>{mark}</Subitle>
                <Title size={TitleSize.SMALL}>{title}</Title>
            </div>
        </header>
        <p className="advantage__desc">{desc}</p>
    </li>;
}

export default AdvantageCard;
