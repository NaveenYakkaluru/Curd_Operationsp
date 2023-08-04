
import React, { useState } from "react"
 function Navi(){
     const [email,setemail]=useState("")
     const [password,setpassword]=useState("")
   

     const handleEmail=(e)=>{
        setemail(e.target.value)
     }
     const handlePassword=(e)=>{
        setpassword(e.target.value)
     }
     const handleSubmit=()=>{
        if(email.length<6){
            alert("Enter name morethan six characters")
        }
        else if(password !== password){
            alert("Password does not match")
        }
         else{
            alert("form successfully submitted")
            localStorage.setItem("email",email)
            localStorage.setItem("password",password)
         }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>email:</label>
            <input type="email" placeholder="email"  value={email} required onChange={handleEmail}/>
            <br/><br></br>
            <label>password:</label>
            <input type="password" placeholder="password" value={password} required onChange={handlePassword}/>
            <br/><br></br>
            <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
 }
 export default Navi;