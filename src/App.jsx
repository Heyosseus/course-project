import style from "./App.module.css";
import Main from "./components/Main";
import Customers from "./components/Customers/Customers";
import Orders from "./components/Orders/Orders";
import Reports from "./components/Reports/Reports";
import Edit from "./pages/edit/Edit";
import { useState } from "react";
import DeletePage from "./pages/delete/DeletePage";
import Create from "./pages/create/Create";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />

              <Main />

              <Footer />
            </>
          }
        ></Route>
        <Route path="/delete" element={<DeletePage />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/create" element={<Create />}></Route>

        <Route
          path="/customers"
          element={
            <>
              <Header />
              <Customers />
            </>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        ></Route>
        <Route
          path="/reports"
          element={
            <>
              <Header />
              <Reports />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export function Header() {
  return (
    <div className={style.header}>
      <h2>Online Shop Admin</h2>
      <div className={style.line}></div>
      <div className={style.nav}>
        <a href="#">
          <li className={style.listItems}>Products</li>
        </a>
        <a href="#">
          <li className={style.listItems}>
            <Link to="/customers"> Customers </Link>
          </li>
        </a>
        <a href="#">
          <li className={style.listItems}>
            <Link to="/orders">Orders</Link>
          </li>
        </a>
        <a href="#">
          <li className={style.listItems}>
            <Link to="/reports">Reports</Link>
          </li>
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className={style.footer}>
      <div>
        &copy; 2022 - Online Shop Admin -
        <span className={style.privacy}> Privacy</span>
      </div>
    </div>
  );
}

export default App;
