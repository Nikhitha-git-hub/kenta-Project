import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./zonal.css";

const ZonalInfo = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      containerRef.current.style.setProperty("--mouse-x", `${clientX - rect.left}px`);
      containerRef.current.style.setProperty("--mouse-y", `${clientY - rect.top}px`);
    }

    const elements = document.querySelectorAll('.lightning-border');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--local-x", `${clientX - rect.left}px`);
      el.style.setProperty("--local-y", `${clientY - rect.top}px`);
    });
  };

  return (
    <div className="zonal-container" onMouseMove={handleMouseMove} ref={containerRef}>
      <div className="spotlight-overlay"></div>

      <div className="zonal-outer-container lightning-border" style={{ position: 'relative', maxWidth: '1200px' }}>
        <div style={{ position: 'absolute', top: '20px', right: '30px', zIndex: 10 }}>
          <button className="buttonStyle"
            onClick={() => navigate("/ServiceSale")}
            onMouseEnter={(e) => e.target.style.opacity = 1}
            onMouseLeave={(e) => e.target.style.opacity = 0.7}
          >
            &times;
          </button>
        </div>

        <div className="zonal-content-main">
          <div className="left-panel-container">
            <div className="description-card lightning-border">
              <div className="inner-card-content" >
                <h3 className="section-title" >INFO<br />PORTAL</h3>
              </div>
            </div>
          </div>

          <div className="vertical-divider"></div>

          <div className="right-panel-container">
            <div className="action-buttons-grid">
              <button className="actionButton">
                <span>Office Profile</span>
              </button>
              <button className="actionButton">
                <span>Franchise Associate</span>
              </button>
              <button className="actionButton">
                <span>Employee Directory</span>
              </button>
              <button className="actionButton">
                <span>Vendor</span>
              </button>
              <button className="actionButton">
                <span>Client Portfolio</span>
              </button>
              <button className="actionButton">
                <span>Fleet Asset Register</span>
              </button>
              <button className="actionButton">
                <span>Zonal Asset Overview</span>
              </button>
              <button className="actionButton">
                <span>Opex Details</span>
              </button>
              <button className="actionButton" style={{ gridColumn: '1 / -1' }}>
                <span>Bank Account Particulars</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZonalInfo;