import React from "react";
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from "../../components/pages/ProductsCatalog/Banner";
import ProductsList from "../../components/pages/ProductsCatalog/ProductsList";
import Newsettler from '../../components/shared/Newsettler/Newsettler'
import Footer from '../../components/shared/Footer/Footer'
import { useParams } from "react-router-dom";



const ProductsCatalog = () => {
    const keyword = useParams();
    return (
        <div className="products-catalog-page">
            <Navbar />
            <Banner />
            <ProductsList  keyword={keyword}/>
            <Newsettler />
            <Footer />
        </div>
    )
}

export default ProductsCatalog;