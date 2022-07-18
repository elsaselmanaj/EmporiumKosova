import React from "react";
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from "../../components/pages/ProductsCatalog/Banner";
import ProductsList from "../../components/pages/ProductsCatalog/ProductsList";
import Newsettler from '../../components/shared/Newsettler/Newsettler'
import Footer from '../../components/shared/Footer/Footer'



const ProductsCatalog = () => {
    return (
        <div className="products-catalog-page">
            <Navbar />
            <Banner />
            <ProductsList />
            <Newsettler />
            <Footer />
        </div>
    )
}

export default ProductsCatalog;