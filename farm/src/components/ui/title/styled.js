import styled from "styled-components";

export const TitleOptions = {
    large: {
        fontSize: '44px',
    },
    medium: {
        fontSize: '41px',
    },
    small: {
        fontSize: '28px',
    }
}

export const StyledTitle = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: 700;
    line-height: 41px;

    ${(props) => {
        // console.log('props',props);
        // const theme = TitleOptions[props.size || TitleOptions.medium];
        // console.log('theme', theme);
        
        return [props.size || TitleOptions.medium];
    }}
`;