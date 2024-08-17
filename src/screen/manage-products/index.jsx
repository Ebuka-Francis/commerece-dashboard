import TopNav from '@/components/topnav/topNav';
import React from 'react';
import './manageProd.css';
import OrdersInput from '@/components/ordersInput';
import { ManageProduct } from '@/datas/data';

export default function ManageProducts() {
  return (
    <div className='Gen-container'>
      <TopNav title='Manage Product' />
    <div className='container'>
      <OrdersInput />
      <table>
        <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Price</th>
        <th>Action</th>
        </tr>
   {ManageProduct.map((item, idx) => <tr key={idx}>
     <td> <img src={item.img} alt="product-images" />  {item.name}</td>
     <td>{item.date}</td>
     <td>{item.price}</td>
     <td>
      <button></button>
      <button></button>
     </td>
   </tr>)}
      </table>
    </div>
    </div>
  )
}
