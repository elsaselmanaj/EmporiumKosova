import React from "react";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import Header from "../../components/shared/Header/Header";
import UpdateComponent from "../../components/pages/UpdateProduct/UpdateComponent";


const UpdateProduct = () => {


    return (
        <div className="update-product-page">
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <UpdateComponent/>
            </main>
        </div>
    )
}

export default UpdateProduct;