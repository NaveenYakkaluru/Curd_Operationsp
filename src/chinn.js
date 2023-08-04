
import ChinTable from "./ChinTable";
import ChinForm from "./ChinForm";
import ChinEdit from "./ChinEdit";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

function Chinn(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<ChinTable/>}></Route>
                    <Route path="/ChinForm" element={<ChinForm/>}></Route>
                    <Route path="/ChinEdit/:navi" element={<ChinEdit/>}></Route>
                </Routes>
            </Router>

        </div>
    )
}
export default Chinn;