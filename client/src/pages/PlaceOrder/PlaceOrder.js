import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import PlaceAnOrder from "../../components/pages/PlaceOrder/PlaceAnOrder";
import Footer from "../../components/shared/Footer/Footer";


const PlaceOrder = () => {
    return (
        <div className="place-order-page">
            <Navbar />
            <PlaceAnOrder />
            <Footer />
        </div>
    )
}

export default PlaceOrder;