import React from "react";
import customer from "./Customers.module.css";
import img from "../../assets/soon.jpg";
import img2 from "../../assets/coming.png";

const Customers = () => {
  return (
    <div className={customer.container}>
      <div className={customer.line}></div>
      <div className={customer.content}>
        <div>
          <h3>Customers Page</h3>
          <div className={customer.main}>
            <img src={img2} alt="Coming soon" className={customer.img} />
            <a href="/" className={customer.back}>
              Back to Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
