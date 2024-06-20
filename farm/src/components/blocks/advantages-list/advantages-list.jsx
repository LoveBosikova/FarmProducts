import React from "react";

import Title from "../../ui/title/title";
import { TitleOptions } from "../../ui/title/styled";
import Button from "../../ui/button/button";
import AdvantageCard from "../../ui/advantageCard/advantageCard";

import { 
  TitleWrap,
  StyledAdvantagesList,
  StyledListComponent

} from "./styled";

function AdvantagesList({advantancies}) {

  if (!advantancies || advantancies.length === 0) return null;
  
  return (
    <StyledAdvantagesList>
      <TitleWrap>
        <Title size={TitleOptions.medium}>Почему фермерские продукты лучше?</Title>
      </TitleWrap>
      <StyledListComponent>
        {
          advantancies.map((adv) => <AdvantageCard src={adv.src} title={adv.title} mark={adv.mark} desc={adv.desc} key={adv.src} />)
        }
      </StyledListComponent>
      <Button>Купить</Button>
    </StyledAdvantagesList>
  );
}

export default AdvantagesList;