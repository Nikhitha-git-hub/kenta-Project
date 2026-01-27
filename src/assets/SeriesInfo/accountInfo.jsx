import { Link, useNavigate } from "react-router-dom";
import "./index.css"

const AccountsInfo = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="closeButton">
                <button onClick={() => navigate("/")}>
                    <span className="icon">&times;</span> </button>
            </div>
            <div className="box">
                <div className="card">
                    <h1>Accounts Info</h1>
                </div>
                <div className="verticalLine"></div>
                <div className="button-grid">
                    <button>Ledgers</button>
                    <button >Statements</button>
                    <button >Reports</button>
                </div>
            </div>
        </div>
    )
}
export default AccountsInfo;