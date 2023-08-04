

// import React from "react";

// class Navi extends React.Component{
//     constructor(){
//         super();
//         this.State={
//             fname:"",
//             email:"",
//             password:"",
//             cpassword:""

//         }
//     }
    
//     Naveen=(e)=>{
//         this.setState({fname:e.target.value})
//     }
//     Ravi=(e)=>{
//         this.setState({email:e.target.value})
//     }
//     Mahi=(e)=>{
//         this.setState({password:e.target.value})
//     }
//     Suni=(e)=>{
//         this.setState({cpassword:e.target.value})
//     }


//     ramSubmit=()=>{
//         if(this.state.fname.length<6){
//             alert("full name atlest to enter > 6 character")
//         }
//         else if( this.state.password != this.state.cpassword){
//             alert("password does not match")
//         }
//         else{
//             alert("suceesfully submited"+ this.state.fname + this.state.email)
//         }
//     }





//     render(){
//         return(
//             <div>

//                 <form onSubmit={ this.ramSubmit}>
//                     <label>full name:</label>
//                     <input value={this.state.fname} type="text" required  onChange={this.Naveen}/>
//                     <br/><br/>
//                     <label>email:</label>
//                     <input  value={ this.state.email}type="email" required  onChange={this.Ravi}/>
//                     <br/><br/>
//                     <label>password:</label>
//                     <input value={this.state.password} type="password" required  onChange={this.Mahi}/>
//                     <br/><br/>
//                     <label>confirm password:</label>
//                     <input  value={this.state.cpassword}type="password" required  onChange={this.Suni}/>
//                     <br/><br/>
//                     <input type="submit" />
//                 </form>


//             </div>
//         )
//     }
// }
// export default Navi;




import React from "react";
 class  App extends React.Component{
    constructor(){
        super();
        this.state={
            fname:"",
            email:"",
            password:"",
            cpassword:""


        }
    }
    handleFname=(e)=>{
        this.setState({fname:e.target.value})
    }
    handleEmail=(e)=>{
        this.setState({email:e.target.value})
    }
    handlePassword=(e)=>{
        this.setState({password:e.target.value})
    }
     handleCpassword=(e)=>{
        this.setState({cpassword:e.target.value})
    }
    

    handleSubmit=()=>{
        if(this.state.fname.length<6){
            alert("full name atlest to enter >6 character")
        }
        else if(this .state.password != this.state.cpassword){
            alert("password does not match")
        }
        else{
            alert("from successfully submited"+ this.state.fname + this.state. email)
        }
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>full name:</label>
                <input  value={ this.state.fname}type="text" required onChange={this.handleFname}/>
                <br/><br/>
                <label>email:</label>
                <input  value={this.state.email}type="email" required  onChange={this.handleEmail}/>
                <br/><br/>
                <label>password:</label>
                <input  value={this.state.password}type="password" required onChange={this.handlePassword}/>
                <br/><br/>
                <label>cpassword:</label>
                <input value={this.state.cpassword} type="password" required onChange={this.handleCpassword}/>
                <br/><br/>
                <input type="submit"/>
                </form>
            </div>
        )
    }
 }
 export default App;