import React from "react";
import main from "./Main.module.css";
import Edit from "../pages/edit/Edit";
import { useState } from "react";
import ShowFilter from "./ShowFilter";

export const data = [
  {
    ProductName: "HL Road Frame - Black, 58",
    ProductNumber: "Fr-R92B-58",
    Color: "black",
    ListPrice: 900.0,
    ModifiedDate: "11 January 2021",
    id: 1,
  },
  {
    ProductName: "HL Road Frame - red, 58",
    ProductNumber: "Fr-R92B-58",
    Color: "red",
    ListPrice: 1431.5,
    ModifiedDate: "06 August 2021",
    id: 2,
  },
  {
    ProductName: "HL Road Frame - red, 62",
    ProductNumber: "Fr-R92B-62",
    Color: "red",
    ListPrice: 1431.5,
    ModifiedDate: "09 November 2021",
    id: 3,
  },
  {
    ProductName: "HL Road Frame - red, 44",
    ProductNumber: "Fr-R92B-44",
    Color: "red",
    ListPrice: 1431.5,
    ModifiedDate: "04 December 2021",
    id: 4,
  },
  {
    ProductName: "HL Road Frame - silver, 48",
    ProductNumber: "Fr-R92B-48",
    Color: "silver",
    ListPrice: 1364.5,
    ModifiedDate: "12 December 2021",
    id: 5,
  },
  {
    ProductName: "HL Road Frame - silver, 42",
    ProductNumber: "Fr-R92B-42",
    Color: "silver",
    ListPrice: 1364.5,
    ModifiedDate: "21 February 2022",
    id: 6,
  },
  {
    ProductName: "HL Road Frame - silver, 48",
    ProductNumber: "Fr-R92B-48",
    Color: "silver",
    ListPrice: 1364.5,
    ModifiedDate: "11 April 2022",
    id: 7,
  },
  {
    ProductName: "HL Road Frame - silver, 46",
    ProductNumber: "Fr-R92B-46",
    Color: "silver",
    ListPrice: 1364.5,
    ModifiedDate: "27 October 2022",
    id: 8,
  },
];

const Main = () => {
  const [show, setShow] = useState(true);
  const showBtn = () => {
    setShow(!show);
  };
  
 const [list, setList] = useState(data);

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
              <th scope="col">Color</th>
              <th scope="col">List Price</th>
              <th scope="col">Modified Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {list.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>{item.ProductName}</td>
                <td>{item.ProductNumber}</td>
                <td>{item.Color}</td>
                <td>{item.ListPrice}</td>
                <td>{item.ModifiedDate}</td>
                <td>
                  <a href="/edit">
                    <button className="btn btn-secondary">Edit</button>
                  </a>
                  <a href="/delete">
                    <button
                      style={{ marginLeft: 8 }}
                      className="btn btn-danger"
                      
                    >
                      Delete
                    </button>
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <a href="/create">
          <button className="btn btn-primary">Create New Product</button>
        </a>
      </div>
    </div>
  );
};

export default Main;
