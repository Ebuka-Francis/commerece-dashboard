// import React from "react";
import "./ordered.css";
import { OrderedItems } from "@/datas/data";

export default function OrderedProducts({ datas }) {
  const dataArrays = Object.keys(datas).map((key) => ({
    id: key,
    ...datas[key],
  }));


  const tableHead = ["", "Product Name", "Order date", "Price", "Action"];
  // const numbs = [1, 2,3,4,5,6,7,]
  return (
    <div>
      <table>
        <tr className="test">
          {tableHead.map((dat) => (
            <th>{dat}</th>
          ))}
        </tr>

        {OrderedItems.map((item, idx) => (
          <tr key={idx}>
            <td>{item.name}</td>
            <td>{item.date}</td>
            <td>{item.price}</td>  
            <td className="items-button">
              <button className="button-ship" onClick> {item.ship}</button>
              <button className="button-cancel">{item.cancel}</button>
            </td>
          </tr>
        ))}
      </table>
      {/* <table> */}

      {dataArrays.map((item) => (
        <table key={item.id} >
          {item.items.map((itx) => (
            // <p>{itx.title}</p>
            <tr key={item.id}>
              <td>{itx.id}</td>
              <td> {itx.title} </td>
              <td>{itx.price}</td>
              <td>{itx.description}</td>
              <td></td>
            </tr>
          ))}
        </table>
      ))}
      {/* </table> */}
      {datas.map((itm) => (
       <div key={itm.id} >{itm.items.map((ite,idx) => <p key={idx}>{ite.title}</p> )}</div> 
      ))

      }
    </div>
  );
}



