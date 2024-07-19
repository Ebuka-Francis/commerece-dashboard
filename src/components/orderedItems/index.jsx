// import React from "react";
import './ordered.css';


export default function OrderedProducts() {
  const datas = ["Product name", "Order date", "Price(#)", "Actions"];

  return (
    <div>
      <table>
          {datas.map((item) => {
        <tr>
            <th sx={{ color: "#BDBDBD", fontSize: "14px" }} key={item.id}>
              {item}
            </th>;
        </tr>
          })}
          <tr className='test' >
            <th>Product name</th>
            <th>Order date</th>
            <th>Price(#)</th>
            <th>Actions</th>
          </tr>
      </table>
    </div>
  );
}
