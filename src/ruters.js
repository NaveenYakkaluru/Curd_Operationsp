import {Yelo} from"./ruters1.js"
import{BroweserRouters as Router,Routes,Route,link} from 'react-router-dom'
  export function App(){
    return(
        <div>
            <Router>
                <p><link to="./ruters1.js"></link></p>
                <Routes>
                    <Route path="./ruters1.js" element={<Yelo/>}/>
                </Routes>

            </Router>

        </div>

    )
  }