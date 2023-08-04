import { useState } from "react";
import { Form } from "react-bootstrap";

function OTP1(){
    const [id,settId]=useState("")
    const [title,setTitle]=useState("")

const changeID=(e)=>{
    settId(e.target.value)
}

const handleSubmit=()=>{
    const data={id,title}
    fetch("http://localhost:3006/posts",{
        method:"POST",
        headers:{"Content-type":"appliaction/json"},
        body:JSON.stringify(data)
    })
    .then(()=>{
alert ("saves successfully ")
    })
    .catch((err)=>{
        console.log(err.message)
    })
} 
    return(
        <div style={{backgroundColor:"skyblue",padding:"20px"}}>
            <br/><br/><br/>
            <h4>Get started</h4>
            <br/><br/>
            <Form onSubmit={handleSubmit}>
                <input style={{padding:"5px"}} type="text" placeholder="Mobile/Email"  value={id} onChange={changeID}/><br/><br/>
                <button style={{width:"195px",padding:"5px",backgroundColor:"lightblue"}}>Continue</button>
<br/><br/>
or Continue with<br/><br/>
<button style={{color:"green"}}>Whatasapp</button>&ensp;<button  style={{color:"blue"}}>Google</button>
<br/><br/>
By Continuing you agree to our terms and polices

            </Form>
            
        </div>
    )
}
export default OTP1;

