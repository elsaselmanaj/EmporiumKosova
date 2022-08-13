import React from "react";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import Header from "../../components/shared/Header/Header";
import DashboardMain from "../../components/pages/Dashboard/DashboardMain";

const Dashboard = () => {
    return (
        <div className="dashboard-page">
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <DashboardMain />
            </main>
        </div>
    )
}

export default Dashboard;