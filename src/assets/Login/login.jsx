import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Ensure css is imported

const Login = () => {
    const navigate = useNavigate();
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
        <div className="login-container" onMouseMove={handleMouseMove} ref={containerRef}>
            <div className="spotlight-overlay"></div>
            
            <div className="login-outer-container lightning-border">
                <div className="closeButton">
                    <button onClick={() => navigate("/")}>
                        <span className="icon">&times;</span> </button>
                </div>
                <div className="contentMain">
                    <div className="card">
                        <h1>KASARKODE</h1>
                    </div>
                    <div className="verticalLine"></div>
                    <div className="button-grid">
                        <div>
                            <input type="text" placeholder="UserName" />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
