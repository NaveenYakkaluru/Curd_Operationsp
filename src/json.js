
import JsonForm from "./jsonform";
import JsonTable from "./jsontable";
import { BrowserRouter as Router ,Routes ,Route, } from "react-router-dom";

function Json(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/"  element={<JsonTable/>}/>
                    <Route path="/Navi"  element={<JsonForm/>}/>
                    
                 
                </Routes>
            </Router>


        </div>
    )
}
export default Json;