import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import UserProfile from "../../components/pages/Profile/Profile";
import Footer from "../../components/shared/Footer/Footer";


const Profile = () => {
    return (
        <div className="profile-page">
            <Navbar />
            <UserProfile />
            <Footer />
        </div>
    )
}

export default Profile;