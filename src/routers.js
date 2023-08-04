import Home from "./Home";
import About from "./About";
import Servies from "./servies";

import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import "./index.css"
function APP(){
    return(
        <div>
            <Router>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="servies">servies</Link></li>      
            </ul>
            <Routes>
                <Route path="/home"element={<Home/>}/>

            </Routes>
            </Router>
        </div>
    )
}
export default APP;