import { Link, useNavigate } from "react-router-dom";

const Ledger = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="closeButton">
        <button onClick={() => navigate("/")}>
            <span className="icon">&times;</span> </button>
      </div>
      <div className="box">
        <div className="card">
          <h1>Ledgers</h1>
        </div>

        <div className="button-grid">
        <Link to = "/subsLedgers"><button className="gradient-btn">Subsidiary Ledger</button></Link> 
          <button className="gradient-btn">General Ledger</button>
          <button className="gradient-btn">Zonal Ledger</button>
        </div>
      </div>
    </div>
  );
};
export default Ledger;
