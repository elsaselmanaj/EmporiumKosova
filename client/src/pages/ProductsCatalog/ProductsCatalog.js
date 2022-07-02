import React from "react";
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from "../../components/pages/ProductsCatalog/Banner";
import Footer from '../../components/shared/Footer/Footer'



const ProductsCatalog = () => {
    return (
        <div className="products-catalog-page">
            <Navbar />
            <Banner />
            <Footer />
        </div>
    )
}

export default ProductsCatalog;