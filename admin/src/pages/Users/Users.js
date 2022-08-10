import React from "react";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import Header from "../../components/shared/Header/Header";
import UsersComponent from "../../components/pages/Users/UsersComponent";

const Users = () => {
    return (
        <div className="users-page">
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <UsersComponent />
            </main>
        </div>
    )
}

export default Users;