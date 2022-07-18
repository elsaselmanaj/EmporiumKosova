import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import Banner from "../../components/pages/Home/Banner";
import Info from "../../components/pages/Home/Info";
import ImgCollection from "../../components/shared/ImgCollection/ImgCollection";
import NewArrivals from "../../components/pages/Home/NewArrivals";
import TrendingProducts from "../../components/pages/Home/TrendingProducts";
import Trends from "../../components/pages/Home/Trends";
import Brands from "../../components/shared/Brands/Brands";
import Feedback from "../../components/shared/Feedback/Feedback";
import Newsettler from "../../components/shared/Newsettler/Newsettler";
import Footer from "../../components/shared/Footer/Footer";

const Home = () => {
    return (
        <div className="home-page">
            <Navbar />
            <Banner />
            <Info />
            <ImgCollection />
            <NewArrivals />
            <TrendingProducts />
            <Trends />
            <Brands />
            <Feedback />
            <Newsettler />
            <Footer />
        </div>
    )
}

export default Home;