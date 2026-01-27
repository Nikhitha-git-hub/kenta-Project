import { Link, useNavigate } from "react-router-dom";
import "./operational.css";

const OperationalView = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="closeButton">
        <button onClick={() => navigate("/")}>
          <span className="icon">&times;</span> </button>
      </div>
      <div className="box">
        <div className="card">
          <h1>Operational View</h1>
        </div>
        <div className="verticalLine"></div>
        <div className="button-grid">
          <button className="gradient-btn">Zonal Info</button>
          <button className="gradient-btn">Series Info</button>
          <button className="gradient-btn">Account Info</button>
        </div>
      </div>
    </div>
  );
};
export default OperationalView;
