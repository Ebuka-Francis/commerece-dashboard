// import React from "react";
import './ordered.css';
import { OrderedItems } from '@/datas/data';


export default function OrderedProducts() {
  const datas = ["Product name", "Order date", "Price(#)", "Actions"];

  return (
    <div>
      <table>
          <tr className='test' >
            <th></th>
            <th>Product name</th>
            <th>Order date</th>
            <th>Price(#)</th>
            <th>Actions</th>
          </tr>
          {
            OrderedItems.map((item, idx) => <tr key={idx} >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.price}</td>
              <td className='items-button'>
                <button className='button-ship'> {item.ship}</button>
                <button className='button-cancel' >{item.cancel}</button>
               </td>
            </tr>)
          }
      </table>
    </div>
  );
}
