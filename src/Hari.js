

// props in function====>
// import React from "react";
// function Hari1(props){
//     return(
//         <div>
//         <p>
//         Fistname:{props.fname}<br/>
//         Lastname:{props.lname}<br/>
//         age:{props.age}<br/>
//         email:{props.email}<br/>
//         phonenumber:{props.phonenumber}
//         </p>

//         </div>
//     )
// }


// function Hari(){
//     return(
//         <div>
//             <h2>empolye details</h2>
//             <Hari1 fname="Naveen" lname="yakkaluru" age="24" email="naveenyakkalur866@gamil.com" phonenumber="8096406082"/>

//         </div>
//     )
// }
// export default Hari;

 //states in calsss=======>

// import React from "react";
// class Hari1 extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             fistname:"chinna",
//             lastname:"yakklauru",
//             Eamil:"naveenyakkluru1939@gamil.com"
//             }
//     }
//     handleUpdate=()=>{
//         this.setState({
//             fistname:"ramu",
//             lastname:"yakkluru",
//             email:"ramu1892@gamil.com"
//         })
//     }
//     render(){
//         return(
//             <div>
//                {this.state.fistname}<br/>
//                {this.state.lastname}<br/>
//                {this.state.Eamil}<br/>
//                <button onClick={this.handleUpdate}>Add</button>

//             </div>
//         )
//     }
// }
// export default Hari1;

 // states in calsss increment and decrement=====>

// import React from "react";
// class Hari extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             value:0
//         }
//     }
//     handleValue=(a)=>{
//         this.setState({
//          value:this.state.value
//         })
//     }
//     handleInc=()=>{
//         this.setState({  
//             value:this.state.value+1
//         })
//     }
//     handleDce=()=>{
//         this.setState({
//             value:this.state.value-1
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <p>{this.state.value}</p>
//                 <button onClick={this.handleInc}>increment</button>
//                 <button onClick={this.handleDce}>decrement</button>
//             </div>
//         )
//     }
// }
// export default Hari;


// HOOKs based in INcremnt and Dcremnet====>

// import React, { useState } from "react";
// function Hari(){
//     const[ value,setValue]=useState(0)
    

//     const hanDle=()=>{
//         setValue(value+1)
//     }
//     const hanDlee=()=>{
//         setValue(value-1)

//     }   
//      return(
//         <div>
//             <p>{value}</p>
//             <button onClick={hanDle}>INC</button>
//             <button onClick={hanDlee}>DEC</button>
//         </div>
//     )
// }
// export default Hari;



// states in calss based in form validation  in local storgae GET VS SET=====>

// import React from "react"
// class Hari extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             Fullname:"",
//             Email:"",
//             Password:"",
//             Cpassword:""

//         }
//     }
//     handleFullname=(a)=>{
//         this.setState({Fullname:a.target.value})
//     }
//     handleEmail=(a)=>{
//         this.setState({Email:a.target.value})
//     }
//     handlePassword=(a)=>{
//         this.setState({Password:a.target.value})
//     }
//     handleCpassword=(a)=>{
//         this.setState({Cpassword:a.target.value})
//     }
//     handleSumbit=()=>{
//         if(this.state.Fullname < 6){
//             alert("name is the atlest more than 5 charcter")
//         }
//         else if(this.state.Password !== this.state.Cpassword){
//             alert("password does not match")
//         }
//         else{
//             alert("form succesfully sumbited")
//             localStorage.setItem("Email",this.state.Email)
//             localStorage.setItem("Password",this.state.Password)
//         }
//     }

//     handleSumbitt=(event)=>{
//        const y=localStorage.getItem("Email",this.state.Email)
//        const z=localStorage.getItem("Pssword",this.state.Password)

//        if(this.state.Email !==y && this.state.Password !==z ){
//        alert("password not matched")
//        }
//        else{
//         alert("sucessfully naveen")
//        }
//        window.location.href="https://www.google.com/search?q=powestar+img&rlz=1C1CHBF_enIN1001IN1001&sxsrf=ALiCzsZWaVLiv1AH5sy7NCZBNcgfhT46OA%3A1670050044171&ei=_PCKY8aLCpebseMP5puksAQ&ved=0ahUKEwjG-Y6d7dz7AhWXTWwGHeYNCUYQ4dUDCA8&uact=5&oq=powestar+img&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIGCAAQHhANMgYIABAeEA0yCAgAEAUQHhANMggIABAFEB4QDToICAAQogQQsAM6CggAEB4QogQQsANKBAhBGAFKBAhGGABQggZYggZg8kpoAXAAeACAAewBiAHWA5IBAzItMpgBAKABAcgBA8ABAQ&sclient=gws-wiz-serp#imgrc=XItdmCjDOkUSlM"
//     }


//     render(){
//         return(
//             <div>
//                 <form onSubmit={this.handleSumbit}>
//                     <label>Full name</label>
//                     <input type="text"  value={this.state.Fullname} required onChange={this.handleFullname}  />
//                     <br/><br/>
//                     <label>Email</label>
//                     <input type="text"   value={this.state.Email} required onChange={this.handleEmail}/>
//                     <br/><br/>
//                     <label>Password</label>
//                     <input type="password"  value={this.state.Password} required onChange={this.handlePassword}/>
//                     <br/><br/>
//                     <label>Cpassword</label>
//                     <input type="password"   value={this.state.Cpassword} required onChange={this.handleCpassword}/>
//                     <br/><br/>
//                     <button onClick={this.handleSumbit}>Sumbit</button>
//                     <button onClick={this.handleSumbitt}>Login</button>
//                 </form>
//             </div>
//         )
//     }
// }
// export default Hari;


// HOOKs based in form validation  How to import loacal stogare ===>
 
// import { useState } from "react"
// function Hari(){
//     const[fullname,setFullname]=useState("")
//     const[email,setEmail]=useState("")
//     const[password,setPassword]=useState("")
//     const[cpassword,setCpassword]=useState("")


//     const handleFullname=(a)=>{
//         setFullname(a.target.value)
//     }
//     const handleEmail=(a)=>{
//         setEmail(a.target.value)
//     }
//     const handlePassword=(a)=>{
//         setPassword(a.target.value)
//     }
//     const handleCpassword=(a)=>{
//         setCpassword(a.target.value)
//     }
     
//      const handleSubmited=()=>{
//         if(fullname.length< 8 ){
//             alert("full name atlest more than 8 chatcter")
//         }
//         else if(password !== cpassword){
//             alert("password does not match")
//         }
//         else{
//             alert("successfully submited")
//             localStorage.setItem("email",email)
//             localStorage.setItem("password",password)
//         }
//      }
//      const shareLink=(event)=>{
//          const a=localStorage.getItem("email",email)
//          const b= localStorage.getItem("password",password)

//          if( email!==a && password!==b){
//             alert("password not matched")
//          }
//         else{
//             alert("naveen is the grate")
//         }
//        window.location.href="https://www.google.com/search?q=powestar+img&rlz=1C1CHBF_enIN1001IN1001&sxsrf=ALiCzsZWaVLiv1AH5sy7NCZBNcgfhT46OA%3A1670050044171&ei=_PCKY8aLCpebseMP5puksAQ&ved=0ahUKEwjG-Y6d7dz7AhWXTWwGHeYNCUYQ4dUDCA8&uact=5&oq=powestar+img&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIGCAAQHhANMgYIABAeEA0yCAgAEAUQHhANMggIABAFEB4QDToICAAQogQQsAM6CggAEB4QogQQsANKBAhBGAFKBAhGGABQggZYggZg8kpoAXAAeACAAewBiAHWA5IBAzItMpgBAKABAcgBA8ABAQ&sclient=gws-wiz-serp#imgrc=XItdmCjDOkUSlM"
//      }


//     return(
//         <div>
//             <form onSubmit={handleSubmited}>
//                 <label>Full name:</label>
//                 <input type="text" required value={fullname} onChange={handleFullname}/>
//                 <br/><br/>
//                 <label>Email:</label>
//                 <input type="email" required value={email} onChange={handleEmail}/>
//                 <br/><br/>
//                 <label>Password:</label>
//                 <input type="password" required value={password} onChange={handlePassword}/>
//                 <br/><br/>
//                 <label>Cpassword:</label>
//                 <input type="password" required value={cpassword}onChange={handleCpassword}/>
//                 <br/><br/>
//                 <button onClick={handleSubmited}>Login</button>
//                 <button onClick={ shareLink}>Sign in</button>
//             </form>

//         </div>
//     )
// }
// export default Hari;

import { useState } from "react"
function Hari(){
    return(
        <div>
            <input type="text"/><button>Add</button>


        </div>
    )
}
export default Hari;



