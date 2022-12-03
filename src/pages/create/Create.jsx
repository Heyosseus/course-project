import React from "react";
import { Header } from "../../App";
import create from "./Create.module.css";

const Create = () => {
  return (
    <div>
      <Header />
      <div className={create.container}>
        <div>
          <h2>Create a new Product</h2>
          <div className={create.content}>
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
              <label htmlFor="">sell Start Date:</label>
              <input type="datetime-local" />
            </form>
            <div className={create.buttons}>
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

export default Create;
