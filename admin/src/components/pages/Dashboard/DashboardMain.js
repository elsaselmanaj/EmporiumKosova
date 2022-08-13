import React from "react";
import "./styles/dashboardMain.scss";
import TopTotal from "./TopTotal";
import Statistics from "./Statistics";
import LatestOrders from "./LatestOrders";
import { useSelector } from "react-redux";
import {FormattedMessage} from 'react-intl'

const DashboardMain = () => {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  return (
    <div className="dashboard-container">
      <h1><FormattedMessage id="dashboard-title"/></h1>

      <TopTotal orders={orders} products={products} />

      <Statistics />

      <LatestOrders orders={orders}/>
    </div>
  );
};

export default DashboardMain;
