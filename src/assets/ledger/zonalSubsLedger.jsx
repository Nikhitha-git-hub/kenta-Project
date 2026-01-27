import { useNavigate } from "react-router-dom";

const ZonalSubsLedger = () => {
  const navigate = useNavigate();
  return (
    <div>
     <div className="closeButton">
        <button onClick={() => navigate("/SubsLedgers")}>
            <span className="icon">&times;</span> </button>
     </div>
      <div className="box">
        <div className="card">
          <h1> Zonal Subsidiary Ledger</h1>
        </div>

        <div className="button-grid">
          <button >Employee Ledger</button>
          <button >Zonal Asset Ledger</button>
          <button>Bank Account Ledger</button>
          <button>Franchise Ledger</button>
        <button>Vendor Ledger</button>
        <button>Client Ledger</button>
        <button>Fleet Ledger</button>
        <button>Opex Ledger</button>
        <button>Office Ledger</button>
        </div>
      </div>
    </div>
  );
};
export default ZonalSubsLedger;
