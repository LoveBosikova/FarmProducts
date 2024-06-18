import React from "react";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";

import { PageMainWrapper } from "./styled";

// Обёртка для контента страниц
function PageWrapper({ ...prop }) {
    return (
        <>
            <Header></Header>
                <PageMainWrapper>
                    <MainPage {...prop} />
                </PageMainWrapper>
            <Footer></Footer>
        </>
    );
}

export default PageWrapper;