import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import LoginMain from "../../components/pages/Auth/LoginMain";
import Footer from "../../components/shared/Footer/Footer";


const Login = () => {
    return (
        <div className="auth-page login-page">
            <Navbar />
            <LoginMain />
            <Footer />
        </div>
    )
}

export default Login;