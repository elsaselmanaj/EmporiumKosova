import React from "react";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import Header from "../../components/shared/Header/Header";
import ProductsComponent from "../../components/pages/Products/ProductsComponent";


const Products = () => {
    return (
        <div className="products-page">
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <ProductsComponent />
            </main>
        </div>
    )
}

export default Products;