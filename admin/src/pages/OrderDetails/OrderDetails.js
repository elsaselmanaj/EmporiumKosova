import React from "react";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import Header from "../../components/shared/Header/Header";
import OrderDetailsComponent from "../../components/pages/OrderDetails/OrderDetailsComponent";


const OrderDetails = () => {

    return (
        <div className="order-details-page">
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <OrderDetailsComponent />
            </main>
        </div>
    )
}

export default OrderDetails;