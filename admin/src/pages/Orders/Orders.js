import React from "react";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import Header from "../../components/shared/Header/Header";
import OrdersComponent from "../../components/pages/Orders/OrdersComponent";



const Orders = () => {
    return (
        <div className="orders-page">
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <OrdersComponent />
            </main>
        </div>
    )
}

export default Orders;