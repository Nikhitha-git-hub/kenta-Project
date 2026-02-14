import { useNavigate } from "react-router-dom";

const SeriesSubsLedger = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="closeButton">
        <button onClick={() => navigate("/SubsLedgers")}>
          <span className="icon">&times;</span> </button>
      </div>
      <div className="content">
        <div className="card">
          <h1> Series Subsidiary Ledger</h1>
        </div>

        <div className="button-grid">
          <button >Purchase & Inventory Ledger</button>
          <button >Sales Service Ledger</button>
          <button>Maintanace Ledger</button>

        </div>
      </div>
    </div>
  );
};
export default SeriesSubsLedger;
