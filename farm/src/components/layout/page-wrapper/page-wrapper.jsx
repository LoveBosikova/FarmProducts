import React from "react";
import "./style.css";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";

// Обёртка для контента страниц
function PageWrapper({ ...prop }) {
    return (
        <>
        <Header></Header>
        <main className="page-wrapper__main">
            <MainPage></MainPage>
        </main>
        <Footer></Footer>
        </>
    );
}

export default PageWrapper;