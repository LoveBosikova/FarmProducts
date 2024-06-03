import React from "react";

import Title from "../../ui/title/title";
import { TitleSize } from "../../ui/title/title";
import Button from "../../ui/button/button";
import AdvantageCard from "../../ui/advantageCard/advantageCard";

import "./style.css";

function AdvantagesList({advantancies}) {

  if (!advantancies || advantancies.length === 0) return null;
  
  return (
    <section className="advantages-list">
      <div className="title__wrap">
      <Title size={TitleSize.SMALL}>Почему фермерские продукты лучше?</Title>
      </div>
      <ul className="advantages-list__list">
        {
          advantancies.map((adv) => <AdvantageCard src={adv.src} title={adv.title} mark={adv.mark} desc={adv.desc} />)
        }
      </ul>
      <Button>Купить</Button>
    </section>
  );
}

export default AdvantagesList;