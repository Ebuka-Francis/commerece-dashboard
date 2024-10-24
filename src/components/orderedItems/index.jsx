// import React from "react";
import "./ordered.css";
import { OrderedItems } from "@/datas/data";


export default function OrderedProducts({ datas }) {
  const dataArrays = Object.keys(datas).map((key) => ({
    id: key,
    ...datas[key],
  }));
  


  const tableHead = ["", "Product Name", "Price",  "Action"];
  // const numbs = [1, 2,3,4,5,6,7,]
  return (
    <div>
      <table>
        <tr className="test">
          {tableHead.map((dat) => (
            <th>{dat}</th>
          
          ))}
        </tr>


      {dataArrays.map((item) => (
        <div className="items-each" key={item.id} >
          {item.items.map((itx) => (
            // <p>{itx.title}</p>
            <tr key={item.id}>
              <td> {itx.title} </td>
              {/* <td>may 4th 2024</td> */}
             <td>{itx.price}</td>
            </tr>
          ))}
          <div className='items-button'>
          <button className="button-ship">Ship</button>
          <button className="button-cancel">Cancel</button>
          </div>
        </div>
      ))}

      </table>
    </div>
  );
}



