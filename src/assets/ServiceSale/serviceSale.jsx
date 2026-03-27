import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./serviceSale.css";

const Service = () => {
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
        <div className="serviceSale-container" onMouseMove={handleMouseMove} ref={containerRef}>
            <div className="spotlight-overlay"></div>

            <div className="serviceSale-outer-container lightning-border" style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '20px', right: '30px', zIndex: 10 }}>
                    <button className="buttonStyle"
                        onClick={() => navigate("/")}
                        onMouseEnter={(e) => e.target.style.opacity = 1}
                        onMouseLeave={(e) => e.target.style.opacity = 0.7}
                    >
                        &times;
                    </button>
                </div>

                <div className="serviceSale-content-main">
                    <div className="left-panel-container">
                        <div className="description-card lightning-border">
                            <div className="inner-card-content" >
                                <h3 className="section-title" >SERVICE<br />SALE</h3>
                            </div>
                        </div>
                    </div>

                    <div className="vertical-divider"></div>

                    <div className="right-panel-container">
                        <div className="action-buttons-list">
                            <Link to="/Zonal" className="full-width-link">
                                <button className="actionButton">
                                    <span>ZONAL</span>
                                </button>
                            </Link>

                            <button className="actionButton">
                                <span>REGIONAL</span>
                            </button>

                            <button className="actionButton">
                                <span>CENTRAL</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;