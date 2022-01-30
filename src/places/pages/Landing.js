import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import MainImg from "../../assets/Main.svg";
function Landing() {
  return (
    <>
      <div className="landing-wraper">
        <img src={MainImg} alt="main img" className="main-img" />
        <div>
          <h1 className="landing-header ">Share your </h1>
          <h1 className="landing-header " id="higlight">
            favorite
          </h1>
          <h1 className="landing-header ">places</h1>
        </div>
      </div>
      <div className="main-upload-wrapper">
        <Link
          to="/places/new"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="main-upload-button">UPLOAD</div>
        </Link>
      </div>
    </>
  );
}

export default Landing;
