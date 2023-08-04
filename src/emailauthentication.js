import { signup,logout,login } from "./firebase";
import React from "react";
import { useRef, useState } from "react"
import { async } from "@firebase/util";
function Def(){

    const [loding,setLoding]=useState(false)

    //useRef()
    let emailRef=useRef()
    let passwordRef=useRef()

    async function handlesignup(){
        setLoding(true)
        await signup(emailRef.current.value,passwordRef.current.value)
    }
    return(
        <div>
            <label>Email:</label>
            <input type="email" ref={emailRef}/>
            <br/><br/>
            <label>password:</label>
            <input type="password" ref={passwordRef}/>
            <br/><br/>
            <button onClick={handlesignup}>SighnUp</button>
            <button>Login</button>
            <button>Logout</button>
        </div>
    )
}
export default Def;