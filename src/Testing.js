// //  import React from "react";
// //   class sari extends React.Component{
// //     constructor(props){
// //         super(props);
// //         this.state={
// //             name:"naveen kumar",
// //             coures:"python full stack developer",
// //             projects:"wether apllications"

// // import { useEffect } from "react"

// // import { useState } from "react";
// // import { UNSAFE_LocationContext } from "react-router-dom"

// //         }
// //     }
// //     handelChnage=()=>{
// //         this.setState({
// //             name:"klrahule",
// //             coures:"indain right hand batsman",
// //             projects:"he select indain icc world cup so is well"
// //         })
// //     }
// //     render(){
// //         return(
// //             <div>
// //                 {this.state.name}<br/>
// //                 {this.state.coures}<br/>
// //                 {this.state.projects}<br/>

                
// //                 <button onClick={this.handelChnage}>upadte</button>
// //             </div>
// //         )
// //     }
// //   }
// //   export default sari;

// //  import React from "react";
// // class sari extends React.Component{
// //     constructor(props){
// //         super(props);
// //         this.state={
// //             value:0
// //         }
// //     }
    
// //     hanmdeLInc=()=>{
// //         this.setState({
// //             value:this.state.value+1
        
// //         })
// //     }
// //     hanmdeLDec=()=>{
// //         this.setState({
// //             value:this.state.value-1
// //         })
// //     }
// //     render(){
// //         return(
// //             <div>
// //                 {this.state.value}<br/>

// //                 <br/>
// //                 <button onClick={this.hanmdeLInc}>increment</button><br/>
// //                 <button onClick={this.hanmdeLDec}>decrement</button>

// //             </div>
// //         )
// //     }
// // }
// // export default sari;
// //  import React from "react";
// //  import { useState } from "react";

// // function Sari(){
// //     const[name,setName]=useState()
// //     const[city,setCity]=useState()
// //     const[mobile,setMobile]=useState()

// //     const nameN=(a)=>{
// //         setName(a.target.value)
// //     }
// //     const cityC=(a)=>{
// //         setCity(a.target.value)
// //     }
// //     const mobileM=(a)=>{
// //         setMobile(a.target.value)
// //     }

// //     const handleSubmit=()=>{
// //         if(name <10){
// //             alert("atlest >10 more than charcters")
// //         }
// //         else if(mobile == 10){
// //             alert("no should have 10 letters")
// //         }
// //         else{
// //             alert("form sccessfully sumbited")
// //         }
// //     }
// //     return(
// //         <div>
// //             <form>
// //             <label>name</label>
// //             <input type="text" placeholder="enter somthing names" value={name} onChange={nameN}/>
// //             <br/>
// //             <label>city</label>
// //             <input type="text"placeholder="enter city" value={city} onChange={cityC}/>
// //             <br/>
// //             <label>mobile:</label>
// //             <input type="mobile" placeholder="ntg" value={mobile} onChange={mobileM}/>
// //             <br/>
// //             <button onClick={handleSubmit}>ADD</button>
// //             </form>
// //         </div>
// //     )
// // }
// // export default Sari;

//  import { useState } from "react";
//  import React from "react";
//  import { Link } from "react-router-dom";
// //  import Chinn from "./Testing2"


 

// function Navi(){

//     const[name,setName]=useState("")
//     const[password,setPassword]=useState("")

//     const nameN=(a)=>{
//         setName(a.target.value)
//     }
//     const passwordD=(a)=>{
//         setPassword(a.target.value)  
//     }
//     const sigiN=()=>{
//         if(name <20){
//             alert("atlest >20 more then character")
//         }
//         else if(password === 20){
//             alert("no should have 20 letters")
//         }
//         else{
//             alert("success fully login ")
//         }
//     }
    

//     return(
        

//         <div  style={{marginLeft:"500px"}} >
//      <h3>Dp flex printing</h3>
//      <br/>
//      <div >
//         <h5>LOGIN FORM</h5>
//         <form>
//         <input type="text" placeholder="Enter somthing name ?" value={name} onChange={nameN}/><br></br>
//         <input type="password" value={password} onChange={passwordD}/>
//         <h6>forgot pwd?</h6>
//       <button style={{backgroundColor:"lightblue"}} onClick={sigiN}>SIGN IN</button>
      
//         </form>
//      </div>

  
//         </div>
       
//     )
// }
// export default Navi;
