
import { useRef, useState } from "react";
import { signup,logout,login } from "./EmailFirabase";
function Navi(){
    const[loding,setLoding]=useState(false)
let EmailRef=useRef()
let passwordRef=useRef()

async function handelsingup(){
setLoding(true)
await signup(EmailRef.current.value,passwordRef.current.value)
}

    return(
        <div style={{textAlign:"center"}}>
            <br/><br/>
            <label>Email:</label>
            <input type="email" placeholder="something enter" ref={EmailRef} />
            <br></br><br/>
            <label>Password:</label>
            <input type="password" placeholder="Enter password" ref={passwordRef}/>
            <br></br><br/>
            <button onClick={handelsingup}>signup</button>
            <button>Login</button>
            <button>Log out</button>
        </div>
    )
}
export default Navi;