import styled from "styled-components";

export const AdvantageCardOptions = {
    good: {
        subtitleColor: "green",
        bgColor: "#E1EDCE",
        text: "Фермерские продукты",
    },
    bad: {
        subtitleColor: "red",
        bgColor: "#F8DDD7",
        text: "Магазинные продукты",
    }
}
;

export const StyledAdvantageCard = styled.li`
    text-decoration: none;
    list-style-type: none;
    margin: 1% 0.5%;
    padding: 2% 1%;
    max-width: 43%;

    ${(props) => {
        let theme; 

        if ( props.mark === "Фермерские продукты") {
            theme = AdvantageCardOptions.good;
        } else {
            theme = AdvantageCardOptions.bad;
        }

        if (!theme) {
            theme = AdvantageCardOptions.good;
        }
    
        return `
            bacground-color: ${theme.bgColor};
        `;
    }}
`;

export const AdvantageHeader = styled.header`
    display: flex;
    justify-content: start;
    gap: 3%;
    align-content: center;
`;

export const AdvantageDescription = styled.p`
    width: 85%;
`;

export const AdvantageImgWrap = styled.picture``;

export const AdvantageImg = styled.img`
    width: 100%;
    height: auto;
`;

export const AdvantageTextWrap = styled.div``;