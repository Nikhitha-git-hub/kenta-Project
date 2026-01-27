import { Link, useNavigate } from "react-router-dom";
import "./serviceSale.css";

const Service = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="closeButton">
                <button onClick={() => navigate("/Operational")}>
                    <span className="icon">&times;</span> </button>
            </div>
            <div className="box">
                <div className="card">
                    <h1>Service Sale</h1>
                </div>
                <div className="verticalLine"></div>
                <div className="button-grid">
                    <Link to="/Zonal" target="_self"><button className="gradient-btn">Zonal</button></Link>
                    <button className="gradient-btn">Regional</button>
                    <button className="gradient-btn">Central</button>
                </div>
            </div>
        </div>
    )
}
export default Service;