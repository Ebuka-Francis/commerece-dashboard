"use client";
import { useEffect } from "react";
import OrdersInput from "@/components/ordersInput";
import TopNav from "@/components/topnav/topNav";
import "./orderPage.css";
import OrderedProducts from "@/components/orderedItems";
import useStore, {fetchFirestoreData} from '../../store/stateManagment';
// import OrderedProducts from '@/'

export default function Orders() {
const data = useStore((state) => state.data );

useEffect(() => {
  const unsubscribe = fetchFirestoreData();

  return () => {
    unsubscribe();  // Clean up the listener when the component unmounts
  };
}, []);


  return (
    <div className="orders-container">
      <TopNav title="Orders" />
      <div className="order-page">
        <OrdersInput />
        <OrderedProducts datas={data} />
      </div>
    </div>
  );
}
