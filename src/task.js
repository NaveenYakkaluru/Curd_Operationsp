// import React from "react";
//  class  App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             fname:"",
//             email:"",
//             password:"",
//             cpassword:""

import { ReactReduxContext } from "react-redux";


//         }
//     }
//     handleFname=(e)=>{
//         this.setState({fname:e.target.value})
//     }
//     handleEmail=(e)=>{
//         this.setState({email:e.target.value})
//     }
//     handlePassword=(e)=>{
//         this.setState({password:e.target.value})
//     }
//      handleCpassword=(e)=>{
//         this.setState({cpassword:e.target.value})
//     }
//     handleLocal=()=>{
//         localStorage.setItem("fname",this.state.fname)
//         localStorage.setItem("email",this.state.email)
//         localStorage.setItem("password",this.state.password)
//         localStorage.setItem("cpassword",this.state.cpassword)

//     }
    

//     handleSubmit=(event)=>{
//         if(this.state.fname.length<6){
//             alert("full name atlest to enter >6 character")
//         }
//         else if(this .state.password !== this.state.cpassword){
//             alert("password does not match")
//         }
//         else{
//             alert("from successfully submited"+ this.state.fname + this.state.email)
//             this.change(event)
//         }
//     }
//     change=(event)=>{
//         window.location.href="https://www.w3schools.com/tags/tag_img.asp"
//     }


//     render(){
//         return(
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                 <label>full name:</label>
//                 <input  value={ this.state.fname}type="text" required onChange={this.handleFname}/>
//                 <br/><br/>
//                 <label>email:</label>
//                 <input  value={this.state.email}type="email" required  onChange={this.handleEmail}/>
//                 <br/><br/>
//                 <label>password:</label>
//                 <input  value={this.state.password}type="password" required onChange={this.handlePassword}/>
//                 <br/><br/>
//                 <label>cpassword:</label>
//                 <input value={this.state.cpassword} type="password" required onChange={this.handleCpassword}/>
//                 <br/><br/>
//                 <input type="submit" onclick={this.change}/>
//                 </form>
//             </div>
//         )
//     }
//  }
//  export default App;



