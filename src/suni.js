


import { useState } from "react";

function Love(){

    
        const [name,setName]=useState("")
        const [email,setEmail]=useState("")
        const [password,setPassword]=useState("")
        const [cpassword,setCpassword]=useState("")
    
        const handleName=(e)=>{
            setName(e.target.value)
        }
        const handleEmail=(e)=>{
            setEmail(e.target.value)
        }  
        const handlePassword=(e)=>{
            setPassword(e.target.value)
        }
        const handleCpassword=(e)=>{
            setCpassword(e.target.value)
            
        }
    
        const handleSubmit=()=>{
            if(name.length < 6){
                alert("enter the value atlest > 6 charcater")
            }
            else if(password !== cpassword){
                alert("password does not match")
            }
            else{
                alert("successfully sumbit")
            }
            localStorage.setItem("name",name)
            localStorage.setItem("email",email)
            localStorage.setItem("password",password)
            localStorage.setItem("cpassword",cpassword)
    
        }
    
        const handleClick=(event)=>{
            const a=localStorage.getItem("email",email)
            const b=localStorage.getItem("password",password)
    
            if(email !==a && password !==b){
                alert("infromation not match")
            }
            else{
                alert("successfullu submit")
    
            }
            window.location.href="https://www.google.com/search?q=powestar+img&rlz=1C1CHBF_enIN1001IN1001&sxsrf=ALiCzsZWaVLiv1AH5sy7NCZBNcgfhT46OA%3A1670050044171&ei=_PCKY8aLCpebseMP5puksAQ&ved=0ahUKEwjG-Y6d7dz7AhWXTWwGHeYNCUYQ4dUDCA8&uact=5&oq=powestar+img&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIGCAAQHhANMgYIABAeEA0yCAgAEAUQHhANMggIABAFEB4QDToICAAQogQQsAM6CggAEB4QogQQsANKBAhBGAFKBAhGGABQggZYggZg8kpoAXAAeACAAewBiAHWA5IBAzItMpgBAKABAcgBA8ABAQ&sclient=gws-wiz-serp#imgrc=XItdmCjDOkUSlM"
        }
       
    
    
        return(
            <div>
                <from onSubmit={handleSubmit}>
                    <label>full name:</label>
                    <input  value={name} type="text" required  onChange={handleName}/>
                    <br/><br/>
                    <label>email:</label>
                    <input value={email} type="email" required  onChange={handleEmail}/>
                    <br/><br/>
                    <label>password:</label>
                    <input  value={password} type="password" required  onChange={handlePassword}/>
                    <br/><br/>
                    <label> cpassword:</label>
                    <input value={cpassword}  type="cpassword" required  onChange={handleCpassword}/>
                    <br/><br/>
                    <button onClick={handleSubmit}>Sign Up</button>
                    <button  onClick={handleClick}>Login</button>
                </from>
    
            </div>
        )
    }
    export default Love;