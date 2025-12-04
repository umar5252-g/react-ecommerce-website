import { OrderDetailsGrid } from "./OrderDetailsGrid";
import { OrdersHeader } from "./OrdersHeader";
export function OrdersGrid({ orders }) {
  return (
    <div className="orders-grid">
      {orders &&
        orders.map((order) => {
          return (
            <div key={order.id} className="order-container">
              <OrdersHeader order={order} />
              <OrderDetailsGrid order={order} />
            </div>
          );
        })}
    </div>
  );
}
