import { Link, useNavigate } from "react-router-dom";

const SeriesInfo = ()=> {
    const navigate = useNavigate()
    return (
        <div>
           <div className="closeButton">
        <button onClick={() => navigate("/")}>
            <span className="icon">&times;</span> </button>
      </div>
        <div className="box">
         <div className="card">
               <h1>Service Sale</h1>
         </div>
         <div className="button-grid">
              <button >Aerocare Series</button>     
                    <button >Personal Care Series</button>
                    <button >Hygiene Care Series</button>
        </div>
        </div>
        </div>
    )
}
 export default SeriesInfo;