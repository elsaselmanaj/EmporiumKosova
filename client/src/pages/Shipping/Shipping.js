import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import ShippingForm from "../../components/pages/Shipping/ShippingForm";
import Footer from "../../components/shared/Footer/Footer";


const Shipping = () => {
    return (
        <div className="shipping-page">
            <Navbar />
            <ShippingForm />
            <Footer />
        </div>
    )
}

export default Shipping;