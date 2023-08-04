import { useContext } from "react"
import React,{ useState }  from "react"


const Context=React.createContext()
function Navi(){
    const [create,setCreate]=useState("business")
    return(
        <div>
            <Context.Provider value={create}>
                <h3>Naveen </h3>
                <Navi1 />
            </Context.Provider>
        </div>
    )
}


function Navi1(){    
    return(
        <div>           
                <h3>Naveen </h3>
                <Navi2/>            
        </div>
    )
}

function Navi2(){
    
    return(
        <div>           
                <h3>Naveen </h3>
                <Navi3/>            
        </div>
    )
}

function Navi3(){ 
    const value=useContext(Context)   
    return(
        <div>           
                <h3>Naveen {value}</h3>            
        </div>
    )
}
export default Navi