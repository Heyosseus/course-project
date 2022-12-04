import React from "react";
import edit from "./Edit.module.css";
import { Header } from "../../App";
import { data } from "../../components/Main";
const Edit = () => {
  return (
    <div>
      <Header />
      <div className={edit.container}>
        <div>
          <h2>Edit Product</h2>
          <div className={edit.content}>
            <form action="">
              <label htmlFor="">Name:</label>
              <input type="text" />
            </form>
            <form action="">
              <label htmlFor="">Product Number:</label>
              <input type="text" />
            </form>
            <form action="">
              <label htmlFor="">Color:</label>
              <input type="text" />
            </form>
            <form action="">
              <label htmlFor="">Standard Cost:</label>
              <input type="text" />
            </form>
            <form action="">
              <label htmlFor="">Last Price:</label>
              <input type="text" />
            </form>
            <form action="">
              <label htmlFor="">Size:</label>
              <input type="text" />
            </form>
            <form action="">
              <label htmlFor="">Weight:</label>
              <input type="text" />
            </form>
            <form action="">
              <label htmlFor="">Sell Start Date:</label>
              <input
                type="datetime-local"
                name="partydate"
                value="2022-12-03T08:30"
              />
            </form>
            <div className={edit.buttons}>
              <button className="btn btn-success">Save</button>
              <a href="/">
                <button className="btn btn-secondary">Back to List</button>
              </a>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
