'use client';
import React from 'react';
import './sideNav.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import CustomizedMenus from '../../screen/menu-dropdown';
import SideNavMenu from '@/screen/sidenav-menu';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';



export default function SideNav() {
  const pathName = usePathname();
  return (
    <div className='sideNav-container' >
        <div className="top-logo">
            <h3>Topibro</h3>
        </div>
      <div className="sideNav">
    <div className={`link ${pathName === '/'? 'active' : 'dashboard'}`}>
      <Link href='#' > 
    <GridViewOutlinedIcon />
       Dashboard </Link>
    </div>
    <div className={`link ${pathName === '/orders-page'? 'active' : 'dashboard'}`} >
      <Link href='orders-page' >
    <LocalMallOutlinedIcon />
      
      Orders</Link>
    </div>
    <div className='dashboard' >
      <SideNavMenu />
    </div>
      </div>
    </div>
  )
}
