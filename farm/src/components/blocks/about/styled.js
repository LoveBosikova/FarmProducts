import styled from "styled-components";

export const StyledAbout = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    position: relative;
    padding-left: 90px;
    padding-top: 159px;
    background-color: #D8ECFE;
    align-items: center;
    z-index: 1;
    box-sizing: border-box;
`;

export const AboutWrapper = styled.section`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    width: 40%;
    z-index: 3;
`;

export const AboutText = styled.p`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    margin-top: 20px;
    padding-right: 122px;
    margin-bottom: 40px;
`;

export const PicWrap = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../../assets/Ellipse.png");
    background-position: center;
    background-repeat: no-repeat;
`;

export const AboutFarmer = styled.img`
    margin-bottom: -3%;
`;

export const AboutPicture = styled.picture`
`;
