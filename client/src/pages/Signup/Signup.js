import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import SignupMain from '../../components/pages/Auth/SignupMain'
import Footer from "../../components/shared/Footer/Footer";


const Signup = () => {
    return (
        <div className="auth-page signup-page">
            <Navbar />
            <SignupMain />
            <Footer />
        </div>
    )
}

export default Signup;