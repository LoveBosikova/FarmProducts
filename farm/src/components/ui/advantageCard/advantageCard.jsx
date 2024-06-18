import React from "react";

import Title from "../../ui/title/title";
import { TitleOptions } from "../title/styled";
import Subitle, { SubitleColor } from "../subtitle/subtitle";

import { 
    StyledAdvantageCard,
    AdvantageHeader,
    AdvantageDescription,
    AdvantageImgWrap,
    AdvantageImg,
    AdvantageTextWrap
} from "./styled";

export const AdvantageFeature = {
    BAD: "Магазинные продукты",
    GOOD: "Фермерские продукты"
    };

function AdvantageCard({src, title, mark, desc}) {

    return <StyledAdvantageCard mark={mark}>
        <AdvantageHeader>
            <AdvantageImgWrap>
                <AdvantageImg
                width="200"
                height="257"
                maxWidth="200"
                src={src}
                alt={desc}
                ></AdvantageImg>
            </AdvantageImgWrap>
            <AdvantageTextWrap>
                <Subitle mark={mark}>{mark}</Subitle>
                <Title size={TitleOptions.small}>{title}</Title>
            </AdvantageTextWrap>
        </AdvantageHeader>
        <AdvantageDescription>{desc}</AdvantageDescription>
    </StyledAdvantageCard>;
}

export default AdvantageCard;
