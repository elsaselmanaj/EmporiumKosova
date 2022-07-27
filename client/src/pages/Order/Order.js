import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import OrderContent from "../../components/pages/Order/OrderContent";
import Footer from "../../components/shared/Footer/Footer";


const Order = () => {
    return (
        <div className="order-page">
            <Navbar />
            <OrderContent />
            <Footer />
        </div>
    )
}

export default Order;