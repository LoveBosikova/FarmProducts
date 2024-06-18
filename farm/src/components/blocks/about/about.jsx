import React from "react";

import Title from "../../ui/title/title";
import { TitleOptions } from "../../ui/title/styled";

import farmer from '../../../assets/Farmer.png';

import { 
    StyledAbout,
    AboutWrapper,
    AboutText,
    PicWrap,
    AboutFarmer,
    AboutPicture
} from "./styled.js";

import "./styled.js";

function About() {
    return (
        <StyledAbout>
            <AboutWrapper>
                <Title size={TitleOptions.large}>Магазин фермерских <br/> продуктов с доставкой</Title>
                <AboutText>
                Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. 
                Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
                </AboutText>
            </AboutWrapper>
            <PicWrap>
                <AboutPicture>
                    <AboutFarmer className="about__farmer" src={farmer} alt="Фермер с натуральными продуктами"></AboutFarmer>
                </AboutPicture>
            </PicWrap>
        </StyledAbout>
    );
}

export default About;