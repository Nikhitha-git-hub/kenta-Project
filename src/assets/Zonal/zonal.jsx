import "./zonal.css";
import { Link, useNavigate } from "react-router-dom";

const Zonal = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="closeButton">
                <button onClick={() => navigate("/ServiceSale")}>
                    <span className="icon">&times;</span> </button>
            </div>
            <div className="box">
                <div className="card">
                    <h1>Zonal</h1>
                </div>
                <div className="verticalLine"></div>
                <div className="button-grid">
                    <button className="gradient-btn">India</button>
                    <button className="gradient-btn">Canada</button>
                    <button className="gradient-btn">UAE</button>
                </div>
            </div>
        </div>
    )
}
export default Zonal;