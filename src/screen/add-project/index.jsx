

"use client";
import { useState, useEffect } from "react";
import TopNav from "@/components/topnav/topNav";
// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import "./addProject.css";
import "react-quill/dist/quill.snow.css";

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function AddProduct() {
  const [value, setValue] = useState("");

  return (
    <div className="add-container">
      <TopNav title="Add Product" />
      <div className="add-product">
        <div className="gen-infor">
          <h4>General information</h4>
          <form action="">
            <div className="cont">
              <label htmlFor="name" className="label-class">
                <span>
                  Name <sup>*</sup>{" "}
                </span>{" "}
                <span className="required">Required </span>{" "}
              </label>
              <input type="text" placeholder="Product Name*" />
            </div>
            <div className="cont">
              <label htmlFor="productDescription" className="label-class">
                <span>
                  Product Description <sup>*</sup>{" "}
                </span>{" "}
                <span className="required">Required </span>{" "}
              </label>
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
          </form>
          <button type="submit">Save</button>
        </div>
        <label htmlFor=""></label>

        <div className="uploads">
          <h4>Upload File</h4>
          <form action="">
            <label htmlFor="file-upload" className="image-label">
              <div className="upload-cont">
                <img src="/vector (14).png" alt="cross-images" />
                <p className="main-image">Main Image</p>
              </div>
            </label>
            <input id="file-upload" type="file" accept="image/*" />
          </form>
          <div className="upload-info">
            <img src="/warning_amber.png" alt="" />
            <p>
              Image needs to be between 500x500 and 2000x2000 pixels. No
              watermarks. Maximum image size 2Mb. to take your shop live.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

