"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import "./sideNav.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Link from "next/link";

export default function SideNavMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleOpenNav = () => {
    setOpen((prevstate) => !prevstate);
  };

  return (
    <div>
      <button className="button-product" onClick={handleOpenNav}>
        {" "}
        <p className="btn">
          <ShoppingCartOutlinedIcon /> 
          Product
        </p>{" "}
        <KeyboardArrowDownIcon />
        {" "}
      </button>
      <div className={open === true ? "menu-container" : "menu-container2"}>
        <div
          className={`link ${pathname === "/manage-product" ? "active" : ""}`}
        >
          <Link href="/manage-product">Manage Product</Link>
        </div>
        <div className={`link ${pathname === "/add-product" ? "active" : ""}`}>
          <Link href="/add-product">Add Product</Link>
        </div>
      </div>
    </div>
  );
}
