import OrdersInput from "@/components/ordersInput";
import TopNav from "@/components/topnav/topNav";
import "./orderPage.css";
import OrderedProducts from "@/components/orderedItems";
// import OrderedProducts from '@/'

export default function Orders() {
  return (
    <div className="orders-container">
      <TopNav title="Orders" />
      <div className="order-page">
        <OrdersInput />
        <OrderedProducts />
      </div>
    </div>
  );
}
