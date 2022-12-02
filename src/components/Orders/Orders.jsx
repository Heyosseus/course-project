import React from 'react';
import order from './Orders.module.css';
import img from '../../assets/soon.jpg';
import img2 from '../../assets/coming.png';

const Orders = () => {
  return (
    <div className={order.container}>
      <div className={order.line}></div>
      <div className={order.content}>
        <h3>Orders Page</h3>
        <div className={order.main}>
          <img src={img2} alt="Coming soon" className={order.img} />
          <a href="/" className={order.back}>
            Back to Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default Orders;
