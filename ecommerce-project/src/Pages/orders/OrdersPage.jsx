import axios from "axios";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Link } from "react-router";
import { formatMoney } from "../../utils/money";

import "./orderspage.css";
import { Header } from "../../components/Header";
import { OrdersGrid } from "./OrdersGrid";

export function OrdersPage({ cart }) {
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

      <div className="header">
        <div className="left-section">
          <Link to="/" className="header-link">
            <img className="logo" src="images/logo-white.png" />
            <img className="mobile-logo" src="images/mobile-logo-white.png" />
          </Link>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <Link className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </Link>

          <Link className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">3</div>
            <div className="cart-text">Cart</div>
          </Link>
        </div>
      </div>

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders &&
            orders.map((order) => {
              return (
                <div key={order.id} className="order-container">
                  <div className="order-header">
                    <div className="order-header-left-section">
                      <div className="order-date">
                        <div className="order-header-label">Order Placed:</div>
                        <div>{dayjs(order.orderTimeMs).format("MMMM D")}</div>
                      </div>
                      <div className="order-total">
                        <div className="order-header-label">Total:</div>
                        <div>{formatMoney(order.totalCostCents)}</div>
                      </div>
                    </div>

                    <div className="order-header-right-section">
                      <div className="order-header-label">Order ID:</div>
                      <div>{order.id}</div>
                    </div>
                  </div>
                  <OrdersGrid order={order} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
