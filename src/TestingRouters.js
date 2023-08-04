
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

// import { render } from "@testing-library/react"
// import React from "react"

// import Navi from "./Testing1.js";
// import Chinn from "./Testing2.js";

// function Main(){
//     return(
//         <div>
//             <Router>
        
//                 <Routes>
//                     <Route path='/' element={<Navi/>}/>
//                     <Route path='/Testing2' element={<Chinn/>}/>
//                 </Routes>

//             </Router>
           
//         </div>
//     )
// }
// export default  Main;



// import React from "react"
// class Form extends  React.Component{
//     constructor(){
//         super();
//         this.state={
//             fname:"",
//             email:"",
//             password:"",
//             cpassword:""
//         }
//     }
//     handelFname=(a)=>{
//         this.setState({fname:a.target.value})
//     }
//     handelEname=(a)=>{
//         this.setState({email:a.target.value})
//     }
//     handelPname=(a)=>{
//         this.setState({password:a.target.value})
//     }
//     handelCpname=(a)=>{
//         this.setState({cpassword:a.target.value})
//     }

//     handleSumbit=()=>{
//         if(this.state.fname.length <6){
//                     alert("enter the name atlest > character")
//               }
//         else if(this.state.password !== this.state.cpassword){
//             alert("password does not match")
//         }
//         else{
//             alert("form succesfuly sumbited")
//         }
//     }

//     render(){
//         return(
//             <div>

                
//                 <label>Fisr name:</label>
//                 <input type="tex" placeholder="enter somthing name" value={this.state.fname} required onChange={this.handelFname} /><br/><br/>
//                 <label>Email:</label>
//                 <input type="email" placeholder="eamil" value={this.state.email} required  onChange={this.handelEname}/><br/><br/>
//                 <label>Password:</label>
//                 <input type="password" placeholder="password" value={this.state.password} required onChange={this.handelPname}/><br/><br/>
//                 <label>cpassword::</label>
//                 <input type="password" placeholder="password" value={this.state.cpassword} required onChange={this.handelCpname}/><br/><br/>
//                 <button onClick={this.handleSumbit}>submit</button>

               

//             </div>
//         )
//     }
// }
// export default Form;



