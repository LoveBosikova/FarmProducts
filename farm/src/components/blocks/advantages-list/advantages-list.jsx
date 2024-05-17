import React from "react";

import Title from "../../ui/title/title";

import AdvantageCard from "../../ui/advantageCard/advantageCard";

// import "./style.css";

function AdvantagesList() {
  return (
    <section className="advantages-list">
      <Title>Почему фермерские продукты лучше?</Title>
      <ul className="dvantages-list__list">
        <li className="dvantages-list__item">
          <AdvantageCard />
        </li>
      </ul>
    </section>
  );
}

export default AdvantagesList;