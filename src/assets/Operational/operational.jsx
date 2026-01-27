import { Link, useNavigate } from "react-router-dom";
import "./operational.css";

const Operational = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="closeButton">
        <button onClick={() => navigate("/")}>
          <span className="icon">&times;</span> </button>
      </div>
      <div className="box">
        <div className="card">
          <h1>Operational Management</h1>
        </div>
        <div className="verticalLine"></div>
        <div className="button-grid">
          <button className="gradient-btn">Sales Department</button>
          <Link to="/serviceSale" target="_self"><button className="gradient-btn">Service Sales Department</button></Link>
          <button className="gradient-btn">Finance Department</button>
          <button className="gradient-btn">Administration Department</button>
        </div>
      </div>
    </div>
  );
};
export default Operational;
