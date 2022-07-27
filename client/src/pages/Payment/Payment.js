import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import PaymentForm from "../../components/pages/Payment/PaymentForm";
import Footer from "../../components/shared/Footer/Footer";


const Payment = () => {
    return (
        <div className="payment-page">
            <Navbar />
            <PaymentForm />
            <Footer />
        </div>
    )
}

export default Payment;