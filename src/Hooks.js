// update the value======>

// import { useState } from "react";
// function Message(){
//     const[username,setUsername]=useState("naveen")
//     return(
//         <div>
//             {username}<br/>

//             <button onClick={()=>setUsername("chinna")}>Click</button>

//         </div>
//     )
// }
// export default Message;

// function Message(){
//     const [firstname,setFirstname]=useState()
//     const [mail,setMail]=useState()
//     const [password,setPassword]=useState()
//     const [confirampassword,setConfirampassword]=useState()

//     const fistName=(a)=>{
//         setFirstname(a.target.value)
//     }
//     const MaiL=(a)=>{
//         setMail(a.target.value)
//     }

//     const passworD=(a)=>{
//         setPassword(a.target.value)
//     }
//     const cpassworD=(a)=>{
//         setConfirampassword(a.target.value)
//     }
//     const handelChange=()=>{
//         if(firstname <6 ){
//             alert("atlest >6 more than charcters")
//         }
//         else if(password !== confirampassword){
//             alert("password does not match")
//         }
//         else{
//             alert("form successfully submited")
//             localStorage.setItem("firstname",firstname)
//             localStorage.setItem("mail",mail)
//             localStorage.setItem("password",password)
//             localStorage.setItem("confirampassword",confirampassword)

//         }
//     }

//         const handleSubmit=(event)=>{
//            const  a=localStorage.getItem("mail",mail)
//             const  b=localStorage.getItem("password",password)
//             if(mail !==a && password !==b){
//               alert("infromation not  match")
//             }
//             else{
//                 alert("naveen is the success full submited")
//             }
//             window.localStorage.href="https://www.bing.com/search?q=mass&cvid=a894550f9d134a639b19cae563125494&aqs=edge..69i57j46l2j0l5j46.4283j0j1&pglt=41&FORM=ANSPA1&PC=U531"
//         }
      
    
    
//     return(
//         <div>
//             <form>
//                 <label> fullname:</label>
//                 <input type="text" value={firstname} onChange={fistName}/>
//                 <br/>
//                 <label>Email</label>
//                 <input type="text" value={mail} onChange={MaiL}/>
//                 <br/>
//                 <label>password:</label>
//                 <input type="password" value={password} onChange={passworD}/>
//                 <br/>
//                 <label>Confiram password:</label>
//                 <input type="password"  value={confirampassword} onChange={ cpassworD}/>
//                 <br/>
//             </form>
//             <button onClick={handelChange}>Click</button>
//             <br/>
//             <button onClick={handleSubmit}>ADD</button>
//         </div>
//     )
// }
// export default Message;

//Maping=============>

// import { render } from "@testing-library/react";
// import React from "react";
// class Message1 extends React.Component{
//     render(){
//         const {img,name,city,mobile}=this.props.info
//         return(
//             <div>
//                 <img src={img}/><br/>
//                 name:{name}<br/>
//                 city:{city}<br/>
//                 mobile:{mobile}<br/>    
//             </div>
//         )
//     }
// }
// class Message extends React.Component{
//     state={
//         naveen:[
//             {img:"https://images.pexels.com/photos/14045196/pexels-photo-14045196.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",name:"navi" ,city:"tadipatri",mobile:"8096406982"}
//         ]
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.naveen.map(x=>(
//                     <Message1 info={x}/>

//                 ))}

//             </div>
//         )
//     }
// }
//  export default Message;




