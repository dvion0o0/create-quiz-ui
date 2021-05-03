import React from "react";
// import { AiOutlineLine } from "react-icons/ai";
import { FaRegCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function FormHeader() {
  return (
    <div className="form-header">
      <NavLink
        to="/design"
        style={{ color: "#aaaaaa", border: "none", textDecoration: "none" }}
        activeStyle={{
          borderBottom: "2px solid #0046ab",
          color: "#0046ab",
          paddingBottom: "5px",
        }}
      >
        {/* <p className="header-text"> */}
        <FaRegCheckCircle className="icon" /> Design
        {/* <div className="underline"></div> */}
        {/* </p> */}
      </NavLink>

      <NavLink
        to="/assign"
        style={{ color: "#aaaaaa", border: "none", textDecoration: "none" }}
        activeStyle={{
          borderBottom: "2px solid #0046ab",
          color: "#0046ab",
          paddingBottom: "5px",
        }}
      >
        {/* <p className="header-text "> */}
        <FaRegCheckCircle className="icon" /> Assign
        {/* </p> */}
      </NavLink>

      <NavLink
        to="/share"
        style={{ color: "#aaaaaa", border: "none", textDecoration: "none" }}
        activeStyle={{
          borderBottom: "2px solid #0046ab",
          color: "#0046ab",
          paddingBottom: "5px",
        }}
      >
        {/* <p className="header-text"> */}
        <FaRegCheckCircle className="icon" /> Share
        {/* </p> */}
      </NavLink>
    </div>
  );
}

export default FormHeader;
