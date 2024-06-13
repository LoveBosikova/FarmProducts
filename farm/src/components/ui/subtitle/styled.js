import styled from "styled-components";

export const StyledSubitle = styled.h2`
margin: 0;
    padding: 0 5%;
    font-weight: 100;
    font-size: 16px;
    line-height: 41px;
    color: #FFFFFF;
    background-color: ${(props) => (!props.color || props.color === 'green' ? '#88AA4D' : '#F75531')};
`