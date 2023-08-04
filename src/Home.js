
 import "./index";
 import Somu from "./somu";
 import Suni from "./suni";
 import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
function Home(){
    return(
        <div>
            <Router>
           <ul>
            <li><Link to={"/navi"}>Somu</Link></li>
            <li><Link to={"/chinna"}>Suni</Link></li>
           
           </ul>

           <Routes>

            <Route path="/navi" element={<Somu/>}/>
            <Route path="/chinna" element={<Suni/>}/>
            

           </Routes>
           </Router>

        </div>
    )
}
export default Home;