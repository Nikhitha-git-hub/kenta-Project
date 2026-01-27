import "./zonal.css";
import { Link, useNavigate } from "react-router-dom";

const ZonalInfo = ()=> {
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
         <div className="button-grid">
                    <button >Office profile</button>
                    <button >Franchise Associate</button>
                    <button >Employee Directory</button>
                    <button>Vendor</button>
                    <button>Client Portfolio</button>
                    <button>Fleet Asset Register</button>
                    <button>Zonal Asset Overview</button>
                    <button>Opex Details</button>
                    <button>Bank Account Particulars</button>
        </div>
        </div>
        </div>
    )
}
 export default ZonalInfo;