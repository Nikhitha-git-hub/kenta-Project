import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import "./home.css";
import Operational from "../Operational/operational"

const Home = () => {

  return (
    <div >
      <div>
        <ul>
          <h2>Kenteco</h2>
          <li ><a href="default.asp">Home</a>  </li>
          <li> <a href="default.asp">Contract</a></li>
          <li><a href="default.asp">Services</a></li>
          <li><a href="default.asp">About</a></li>
          <Link to="/login" target="_self" rel="noopener noreferrer"> <li><a>Login</a></li></Link>
        </ul>
      </div>
      <div className="box">
        <div className="card">
          <h1>Description</h1>
        </div>
        <div className="verticalLine">
        </div>
        <div className="button-grid">
          <nav className="button-grid">
            <button className="gradient-btn">PROPRIETORSHIP</button>
            <button className="gradient-btn">CORP0RATE MANAGEMENT</button>
            <Link to="/Operational" target="_self" rel="noopener noreferrer">
              <button className="gradient-btn">OPERATIONAL MANAGEMENT</button></Link>
          </nav>


          {/* <button className="gradient-btn">PROPRIETORSHIP</button>    
          <button className="gradient-btn">CORPARATE MANAGEMENT</button> 
          <button className="gradient-btn"  onClick={()=>setActiveTab('Operational')} >
             OPERATIONAL MANAGEMENT</button> */}


        </div>
      </div>

    </div>


  );

}

export default Home;