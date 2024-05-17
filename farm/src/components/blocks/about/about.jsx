import React from "react";

import Title, { TitleSize } from "../../ui/title/title";

import farmer from '../../../assets/Farmer.png';

import "./style.css";

function About() {
    return (
        <section className="about">
            <div className="about__wrapper">
                <Title size={TitleSize.BIG}>Магазин фермерских <br/> продуктов с доставкой</Title>
                <p className="about__text">
                Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. 
                Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
                </p>
            </div>
            <div className="about__picWrap">
                <picture>
                    <img className="about__farmer" src={farmer} alt="Фермер с натуральными продуктами" />
                </picture>
            </div>
        </section>
    );
}

export default About;