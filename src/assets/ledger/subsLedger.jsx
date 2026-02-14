import { Link, useNavigate } from "react-router-dom";

const SubsLedger = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="closeButton">
        <button onClick={() => navigate("/ledgers")}>
          <span className="icon">&times;</span> </button>
      </div>
      <div className="content">
        <div className="card">
          <h1>Subsidiary Ledger</h1>
        </div>
        <div className="button-grid">
          <Link to="/zonalSubsLedgers"><button className="gradient-btn">Zonal Subsidiary</button></Link>
          <Link to="/seriesSubsledgers"> <button className="gradient-btn">Series Subsidiary</button></Link>
        </div>
      </div>
    </div>
  );
};
export default SubsLedger;
