import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    // Global spotlight coordinates
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      containerRef.current.style.setProperty("--mouse-x", `${clientX - rect.left}px`);
      containerRef.current.style.setProperty("--mouse-y", `${clientY - rect.top}px`);
    }

    // Local coordinates for any element with 'lightning-border'
    const elements = document.querySelectorAll('.lightning-border');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--local-x", `${clientX - rect.left}px`);
      el.style.setProperty("--local-y", `${clientY - rect.top}px`);
    });
  };

  return (
    <div className="home-container" onMouseMove={handleMouseMove} ref={containerRef}>
      <div className="spotlight-overlay"></div>

      <div className="dashboard-outer-container lightning-border">
        <header className="main-header">
          <div className="brand-group">
            <img src="/src/assets/Home/kenta_logo1.png" alt="K" className="brand-icon" />
            <span className="brand-name">KENTACO</span>
          </div>
          <nav className="nav-menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="header-login">
            <Link to="/login">Login</Link>
          </div>
        </header>

        <div className="dashboard-content-main">
          <div className="left-panel-container">
            <div className="description-card lightning-border">
              <div className="inner-card-content">
                <div className="icon-badge">
                  <img src="/src/assets/Home/blueant_logo1.png" alt="K" />
                </div>
                <h3 className="section-title">BLUE ANT</h3>
              </div>
            </div>
          </div>

          <div className="vertical-divider"></div>

          <div className="right-panel-container">
            <div className="action-buttons-list">
              <button className="dashboard-action-btn lightning-border">
                <span>PROPRIETORSHIP</span>
              </button>
              <button className="dashboard-action-btn lightning-border">
                <span>CORPORATE MANAGEMENT</span>
              </button>
              <Link to="/Operational" className="full-width-link">
                <button className="dashboard-action-btn lightning-border">
                  <span>OPERATIONAL MANAGEMENT</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;