import React from 'react';
import './sideNav.css';
import Link from 'next/link';
import CustomizedMenus from '../../screen/menu-dropdown';

export default function SideNav() {
  return (
    <div className='sideNav-container' >
        <div className="top-logo">
            <h3>Topibro</h3>
        </div>
      <div className="sideNav">
    <div className='dashboard' >
    <img src="/dashboard-svg.png" alt="dashboard-images" />
      <Link href='#' >Dashboard </Link>
    </div>
    <div className='dashboard' >
    <img src="/order-svg.png" alt="dashboard-images" />
      <Link href='orders-page' >Orders</Link>
    </div>
    <div className='dashboard' >
    {/* <img src="/product-svg.png" alt="dashboard-images" /> */}
      {/* <Link href='product-page' >Product </Link> */}
      <CustomizedMenus />
    </div>
      </div>
    </div>
  )
}
