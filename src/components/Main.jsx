import React from "react";
import main from "./Main.module.css";
import Edit from "../pages/edit/Edit";
import { useState } from "react";
import ShowFilter from "./ShowFilter";

const Main = () => {
  

  const [show, setShow] = useState(true);
  const showBtn = () => {
    setShow(!show);
  };

  return (
    <div className={main.container}>
      <div className={main.line}></div>
      <div className={main.header}>
        <h2>Products</h2>
        <button className="btn btn-light border" onClick={showBtn}>
          {show ? "Show filter" : "Hide filter"}
        </button>
      </div>
      {show ? "" : <ShowFilter />}
      <div className={main.tableContainer}>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Product Number</th>
              <th scope="col">color</th>
              <th scope="col">List Price</th>
              <th scope="col">Modified Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HL Road Frame - Black, 58</td>
              <td>Fr-R92B-58</td>
              <td>Black</td>
              <td>900.00</td>
              <td>11 January 2021</td>
              <td>
                <a href="/edit">
                  <button className="btn btn-secondary">Edit</button>
                </a>
                <a href="/delete">
                  <button style={{ marginLeft: 8 }} className="btn btn-danger">
                    Delete
                  </button>
                </a>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>HL Road Frame - Red, 58</td>
              <td>Fr-R92B-58</td>
              <td>Red</td>
              <td>1,431.50</td>
              <td>06 August 2021</td>
              <td>
                <a href="/edit">
                  <button className="btn btn-secondary">Edit</button>
                </a>

                <a href="/delete">
                  <button style={{ marginLeft: 8 }} className="btn btn-danger">
                    Delete
                  </button>
                </a>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>HL Road Frame - Red, 62</td>
              <td>Fr-R92B-62</td>
              <td>Red</td>
              <td>1,431.50</td>
              <td>09 November 2021</td>
              <td>
                <a href="/edit">
                  <button className="btn btn-secondary">Edit</button>
                </a>
                <a href="/delete">
                  <button style={{ marginLeft: 8 }} className="btn btn-danger">
                    Delete
                  </button>
                </a>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>HL Road Frame - Red, 44</td>
              <td>Fr-R92B-44</td>
              <td>Red</td>
              <td>1,431.50</td>
              <td>09 November 2021</td>
              <td>
                <a href="/edit">
                  <button className="btn btn-secondary">Edit</button>
                </a>
                <a href="/delete">
                  <button style={{ marginLeft: 8 }} className="btn btn-danger">
                    Delete
                  </button>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <a href="/create">
          <button className="btn btn-primary">Create New Product</button>
        </a>
      </div>
    </div>
  );
};

export default Main;
