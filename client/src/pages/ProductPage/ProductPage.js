import React from "react";
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from "../../components/pages/ProductsCatalog/Banner";
import SingleProduct from "../../components/pages/ProductPage/SingleProduct";
import Newsettler from '../../components/shared/Newsettler/Newsettler'
import Footer from '../../components/shared/Footer/Footer'



const ProductPage = () => {
    return (
        <div className="product-page">
            <Navbar />
            <Banner />
            <SingleProduct />
            <Newsettler />
            <Footer />
        </div>
    )
}

export default ProductPage;