import React from "react";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import Header from "../../components/shared/Header/Header";

const Home = () => {
    return (
        <div className="home-page">
            <Sidebar />
            <main className="main-wrap">
                <Header />
            </main>
        </div>
    )
}

export default Home;