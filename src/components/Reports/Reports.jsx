import React from "react";
import report from "./Reports.module.css";
import img from "../../assets/soon.jpg";
import img2 from "../../assets/coming.png";

const Reports = () => {
  return (
    <div className={report.container}>
      <div className={report.line}></div>
      <div className={report.content}>
        <div>
          <h3>Reports Page</h3>
          <div className={report.main}>
            <img src={img2} alt="Coming soon" className={report.img} />
            <a href="/" className={report.back}>
              Back to Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
