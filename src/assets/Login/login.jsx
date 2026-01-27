import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="closeButton">
                <button onClick={() => navigate("/")}>
                    <span className="icon">&times;</span> </button>
            </div>
            <div className="box">
                <div className="card">
                    <h1>KASARKODE</h1>
                </div>
                <div className="verticalLine"></div>
                <div className="button-grid">
                    <div>
                        <input type="text" placeholder="UserName" />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
