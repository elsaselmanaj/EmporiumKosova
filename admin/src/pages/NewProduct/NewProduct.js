import React from "react";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import Header from "../../components/shared/Header/Header";
import AddProduct from "../../components/pages/NewProduct/AddProduct";


const NewProduct = () => {
    return (
        <div className="new-product-page">
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <AddProduct />
            </main>
        </div>
    )
}

export default NewProduct;