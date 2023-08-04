import EmpTable from "./EmpTable";
import EmpForm from "./EmpForm";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

function King(){
    return(
        <div>
          <Router>
            <Routes>
                <Route path="/" element={<EmpTable/>}></Route>
                <Route path="/EmpForm" element={<EmpForm/>}></Route>
                

            </Routes>
          </Router>
        </div>
    )
}
export default King;