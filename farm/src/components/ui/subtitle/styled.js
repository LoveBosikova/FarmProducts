import styled from "styled-components";
import { AdvantageCardOptions } from "../advantageCard/styled";

export const StyledSubitle = styled.h2`
    margin: 0;
    padding: 0 5%;
    font-weight: 100;
    font-size: 16px;
    line-height: 41px;
    color: #FFFFFF;
    background-color: ${(props) => {
        let theme;

        if ( props.children == "Фермерские продукты") {
            theme = AdvantageCardOptions.good;
        } else {
            theme = AdvantageCardOptions.bad;
        }

        if (!theme) {
            theme = AdvantageCardOptions.good;
        }

        return theme.subtitleColor;
    }};
`;
