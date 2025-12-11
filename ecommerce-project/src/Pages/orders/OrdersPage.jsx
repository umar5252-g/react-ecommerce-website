import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";

import "./orderspage.css";
import { Header } from "../../components/Header";
import { OrdersGrid } from "./OrdersGrid";

export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    fetchOrdersData();
  }, []);

  return (
    <>
      <Header cart={cart} />
      <title>Orders</title>

      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} loadCart={loadCart} />
      </div>
    </>
  );
}
