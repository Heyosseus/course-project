import React from "react";
import { Header } from "../../App";
import Delete from "./Delete.module.css";
const DeletePage = () => {
  return (
    <div>

    <Header />
    <div className={Delete.container}>
      <div>
        <div>
          <h3>Confirm Delete Product</h3>
          <p className={Delete.paragraph}>
            Are you sure you want to delete the next product?
          </p>
        </div>
        <div>
          <form action="">
            <label htmlFor="">ProductId:</label>
            <p>680</p>
          </form>
          <form>
            <label htmlFor="">Name:</label>
            <p>HL Road Frame - Black, 58</p>
          </form>
          <form>
            <label htmlFor="">ProductNumber:</label>
            <p>Fr-R92B-58</p>
          </form>
          <form>
            <label htmlFor="">Color:</label>
            <p>Black</p>
          </form>
          <form>
            <label htmlFor="">StandardCost:</label>
            <p>1059</p>
          </form>
          <form>
            <label htmlFor="">LastPrice:</label>
            <p>900.00</p>
          </form>
          <form>
            <label htmlFor="">Size:</label>
            <p>58</p>
          </form>
          <form>
            <label htmlFor="">Weight:</label>
            <p>1016.04</p>
          </form>
          <form>
            <label htmlFor="">ProductCategoryId:</label>
            <p></p>
          </form>
        </div>
        <button className="btn btn-danger" style={{ marginTop: 12 }}>
          Delete the Product!
        </button>
        <a href="/">
          <button className="btn btn-primary" style={{ marginTop: 12 }}>
            Cancel - Back to List
          </button>
        </a>
      </div>
    </div>
    </div>
  );
};

export default DeletePage;
