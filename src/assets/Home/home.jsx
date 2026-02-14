import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import "./home.css";

const Home = () => {

  return (
    <div>
      <nav className="navBar">
        <div className="logo">  <h2>Kenteco</h2></div>
        <div className="nav-links">
          <a href="default.asp">Home</a>
          <a href="default.asp">Contract</a>
          <a href="default.asp">Services</a>
          <a href="default.asp">About</a>
        </div>
        <div className="login">
          <Link to="/login" target="_self" rel="noopener noreferrer"> <a>Login</a></Link></div>
      </nav>
      <div className="content">
        <div className="descriptionCard">
          <h1>Description</h1>
        </div>
        <div className="dividerLine">
        </div>
        <div className="button-grid">
          <button className="gradient-btn">PROPRIETORSHIP</button>
          <button className="gradient-btn">CORP0RATE MANAGEMENT</button>
          <Link to="/Operational" target="_self" rel="noopener noreferrer">
            <button className="gradient-btn">OPERATIONAL MANAGEMENT</button></Link>
        </div>
      </div>

    </div>

  );

}

export default Home;