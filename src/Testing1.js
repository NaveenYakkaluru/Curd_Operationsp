

import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";




function Navi(){

   const[name,setName]=useState("")
   const[password,setPassword]=useState("")

   const nameN=(a)=>{
       setName(a.target.value)
   }
   const passwordD=(a)=>{
       setPassword(a.target.value)  
   }
   const sigiN=()=>{
       if(name <20){
           alert("atlest >20 more then character")
       }
       else if(password === 20){
           alert("no should have 20 letters")
       }
       else{
           alert("success fully login ")
       }
   }
   
   return(
       
       <div  style={{marginLeft:"500px"}} >
    <h3>Dp flex printing</h3>
    <br/>
    <div >
       <h5>LOGIN FORM</h5>
       <form>
       <input type="text" placeholder="Enter somthing name ?" value={name} onChange={nameN}/><br></br>
       <input type="password" value={password} onChange={passwordD}/>
       <h6>forgot pwd?</h6>
     <button style={{backgroundColor:"lightblue"}} onClick={sigiN}><Link to="/Testing2">SIGN IN</Link></button>
     
       </form>
    </div>
    
       </div>
      
   )
}
export default Navi;
