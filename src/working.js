// import React from "react";
// class Dad extends React.Component{
//     state={
//         name:"naveen",
//         age:24,
//         salary:"up our company"
//     }
//     handlechange=()=>{
//         this.setState({
//             name:"chinna",
//             age:23,
//             salary:"on my decision"
//         })
//     }
//     render(){
//         return(
//             <div>
//             <p>{this.state.name}</p>
//             <p>{this.state.age}</p>
//             <p>{this.state.salary}</p>
//             <button onClick={this.handlechange}>udpate</button>

import { useState } from "react";

// const { useEffect } = require("react")

// const { useState, useEffect } = require("react")

// import React, { useState } from "react";

// import { prependOnceListener } from "process";
// import React from "react";

              
//             </div>

//         )
//     }
        
//     }
//     export default Dad;

// import React from "react";
// class Jaki extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             fname:"",
//             Email:"",
//             password:"",
//             cpassword:""
//         }
//     }
//     handleFname=(e)=>{
//         this.setState({fname:e.target.value})
//     }
//     handleEmail=(e)=>{
//         this.setState({Email:e.target.value})
//     }
//     handlePassword=(e)=>{
//         this.setState({password:e.target.value})
//     }
//     handleCpassword=(e)=>{
//         this.setState({cpassword:e.target.value})
//     }

//     handleSubmit=()=>{
//         if(this.state.fname.length<6){
//             alert("full name atlest more than > 6 characters")
//         }
//         else if(this.state.password !== this.state.cpassword){
//             alert("password does not match")
//         }
//         else{
//             alert("successfully submit + this.state.fanme.this.state.email")
//         }

//     }


//     render(){
//         return(
//             <di>
//                 <form onSubmit={this.handleSubmit}>
//                 <label>Fname:</label>
//                 <input value={this.state.fname} type="text"  required  onChange={this.handleFname}></input>
//                 <br></br><br></br>
//                 <label >Email:</label>
//                 <input value={this.state.Email}  type="email"  required  onChange={this.handleEmail}></input>
//                 <br></br><br></br>
//                 <label>password:</label>
//                 <input value={this.state.password}  type="password" required  onChange={this.handlePassword}></input>
//                 <br></br><br></br>
//                 <label>cpassword:</label>
//                 <input  value={this.state.cpassword} type="Cpassword" required onChange={this.handleCpassword}></input>
//                 <br></br><br></br>
//                 <input type="submit"></input>
//                 </form>
//             </di>
          
//         )
//     }
// }
// export default Jaki;


// function App(){
//     return(
//         <div>
//             <form>
//             <label>full name:</label>
//             <input type="text"></input>
//             <br></br><br></br>
//             <label>email:</label>
//             <input type="email"></input>
//             <br></br><br></br>
//             <label>password:</label>
//             <input type="passwrod"></input>
//             <br></br><br></br>
//            <button>submit</button>
//            </form>

//         </div>
//     )
// }
// export default App;



// props----->

// function One(props){
//     return(
//         <div>
//             name:{props.name}<br></br>
//             city:{props.city}<br></br>
//             state:{props.state}
            

//         </div>
//     )
// }
// function Two(){
//     return(
//         <div>
//             <One name="naveen"city="tadipatri" state="Anantapur"/>
            
//         </div>
//     )
// }
// export default Two;



// import React from "react";
// class One extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>project is the main concept of tue every lucky evenn the we are </h1>
//                <img src={this.props.img}/><br/>
//                name:{this.props.name}<br/>
//                salarey:{this.props.salarey}<br/>
//                age:{this.props.age}<br/>
//                role:{this.props.role}
//             </div>
//         )
//     }
        
//     }
//     class Two extends React.Component{
//         render(){
//             return(
//                 <div>
//                     <h1>im alredy sumbited all kind of project deltails alos called to the naveen </h1>
//                     <One name="naveen" salarey="2000" age="24" role="front end developer" img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
//                 </div>
    
//             )
//         }
            
//         }
//        export default Two;




// import React from "react";
// class One extends React.Component{
//     render(){
//         const{fanme,lanem,city,age}=this.props;
//         return(
//             <div>
//                 firstname:{fname}<br/>
//                 lastname:{lname}<br/>
//                 age:{age}<br/>
//                 city:{city}<br/>
//                 intrest:{intrest}
//             </div>
//         )
        
//     }
// }

// //vaildate the props-------->
// props.propTypes={
//     fname:propTypes.srting,
//     lname:propTypes.srting,
//     age:propTypes.number,
//     city:propTypes.srting,
//     intrest:propTypes.array
// }
//  props.defaultprops={
//     fname:"naveen",
//     Lname:"yakkaluru",
//     age:25,
//     city:"tadipatri",
//     intrest:["tecgingei"]
// }
// export default One;


// state==========>pass the infromation with in the compoents oney class baesd compenonts

// import React from "react"
// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             name:"naveen",
//             city:"tadipatri",
//             age:25,
//             skil:"recat"
//         }
//     }


//     chanage=()=>{
//         this.setState({
//             name:"kumar",
//             city:"goav",
//             age:24,
//             skils:"front end developer"
//         })

//     }


//     render(){
//         return(
//             <div>
//                 <div>
//                 name:{this.state.name}<br></br>
//                 city:{this.state.city}<br></br>
//                 age:{this.state.age}<br></br>
//                 skil:{this.state.skil}
//                 </div>

//                 <button onClick={this.chanage}>udpate</button>
//             </div>
        
//         )

//     }
// }
// export default App;


// import React from "react";
//  class  App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             fname:"",
//             email:"",
//             password:"",
//             cpassword:""

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
//                 <input type="submit" onclick={change}/>
//                 </form>
//             </div>
//         )
//     }
//  }
//  export default App;

// how to localstorage import data and open the broweser one type web page========>

// import React from "react";
// class Love extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             fullname:"",
//             city:"",
//             dateofbirth:"",
//             email:"",
//             password:"",
//             cpassword:""
//         }
//     }
//     handleFullname=(e)=>{
//         this.setState({fullname:e.target.value})
//     }
//     handleCity=(e)=>{
//         this.setState({city:e.target.value})
//     }
//     handleDateofbirth=(e)=>{
//         this.setState({dateofbirth:e.target.value})
//     }
//     handleEmail=(e)=>{
//         this.setState({email:e.target.value})
//     }
//     handlePassword=(e)=>{
//         this.setState({password:e.target.value})
//     }
//     handleCpassword=(e)=>{
//         this.setState({cpassword:e.target.value})
//     }
    
//     handleSubmit=()=>{
//         if(this.state.fullname.length <6){
//             alert("enter the value atlest >6 character")
//         }
//         else if(this.state.password !== this.state.cpassword){
//             alert("password does not match")
//         }
//         else{

//             alert("suceesflly sumbited")
        
//             localStorage.setItem("email",this.state.email)
//             localStorage.setItem("password",this.state.password)           
//         }
//     }
//     handleClick=(event)=>{
//          const x=localStorage.getItem("email")
//          const y=localStorage.getItem("password")

//          if(this.state.email !== x && this.state.password !== y){
//               alert("information not match")
//          }
//          else{
//             alert("successfully submitted")
//             }
//             this.sai(event)
//     }
//     sai=(event)=>{
//          event.preventDefault()
//          window.location.href="https://www.w3schools.com/tags/tag_img.asp"
//     }   
    
//     render(){
//         return(
//              <div>
//             <form onSubmit={this.handleSubmit}>
//                 <label>full naveen:</label>
//                 <input  value={this.state.fullname}type="text" required onChange={this.handleFullname}></input>
//                 <br/><br/>
//                 <label>city:</label>
//                 <input  value={this.state.city}type="city" required onChange={this.handleCity}></input>
//                 <br/><br/>
//                 <label>date of birth</label>
//                 <input  value={this.state.dateofbirth}type="date" required onChange={this.handleDateofbirth}></input>
//                 <br></br>
//                 <label>email:</label>
//                 <input  value={this.state.email} type="email" placeholder="email" required  onChange={ this.handleEmail}></input>
//                 <br/><br/>
//                 <label>password:</label>
//                 <input  value={this.state.password} type="password" placeholder="password" required onChange={this.handlePassword}></input>
//                 <br/><br/>
//                 <label>cpassword:</label>
//                 <input  value={this.state.cpassword} type="password" placeholder="password" required onChange={this.handleCpassword}></input>
//                 <br/><br/>
//                 <button>sing Up</button>
//                 <button onClick={this.handleClick}>Login</button>
//             </form>
//             </div>
//         )
        
//     }
// }
// export default Love;


// dynamic data======> with out constroctor used{class besd compoent}=====>

// import React from "react";
// class Love extends React.Component{
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
// class Love1 extends React.Component{
//     state={
//         naveen:[
//             {img:"",name:"navi" ,city:"tadipatri",mobile:"8096406982"}
//         ]
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.naveen.map(x=>(
//                     <Love info={x}/>

//                 ))}

//             </div>
//         )
//     }
// }
//  export default Love1;

// {functional compoenent}======>

// function Love(){
//     const{name,city,salarey,mobile,role}=props
//     return(
//         <div>
//             <ul>
//                 <li>name:{name}</li><br/>
//                 <li>city:{city}</li><br/>
//                 <li>salarey:{salarey}</li><br/>
//                 <li>mobile:{mobile}</li><br/>
//                 <li>role:{role}</li>
//             </ul>
//         </div>
//     )
// }
// function Love1(){
// const values=["naveen","tadipatri","20000","30000","front developee"]
// return(
//     <div>
//         {values.map((items)=>{
//             <Love name={values}/>
//         })}
//     </div>
// )
// }
// export default Love1;



// HOOKS Methods========>

// 1.useState()======> state, setstate

// import React,{useState} from "react"


// function App(){
//     const [value,setValue]=useState("Helo")
//     const [app,setApp]=useState(0)
//     const [load,setLoad]=useState("")
  
//     const change=()=>{
//       setValue("Good Morning")
//     }
//     const inc=()=>{
//       setApp(app+1)
//     }
//     const dec=()=>{
//       setApp(app-1)
//     }
//     const helo=(e)=>{
//   setLoad(e.target.value)
//     }
//     return(
//       <div>
//         {value}
//         <button onClick={change}>change</button>
//         <p>{app}</p>
//         <button onClick={inc}>Inc</button>
//         <button onClick={dec}>Dec</button>
//   <p>{load}</p>
//         <input type="text" onChange={helo} />
//       </div>
//     )
//   }
  
//   export default App;


// function King(){
//     const[loading,setloading]=useState("hello")
//     const udpate=()=>{
//         setloading("naveen is the good boy")
//     }
//     return(
//         <div>
//             {loading}<br/>
//             <button onClick={udpate}>ADD</button>

//         </div>
//     )
// }
// export default King;

// 2.useEffect()=======> setTimeout

// import React,{useState,useEffect} from "react"
// function King(){
//     const[loading,setloading]=useState(0)

//     useEffect(()=>{
//         setTimeout(()=>{
//             setloading(loading+1)

//         },2000)
//     })
//     return(
//         <div>
//             {loading}

//         </div>
//     )
// }
// export default King;

// 3.usecontex()=====> mean one to direct (or) we can used props mean one by one
// a.create context
// b.create provider
// //c.consumer
// import  { Provider} from "react";
// const {useContext,useEffect,useState}=require("react")
// import React, { useContext } from "react";
//  const context=React.createContext()
// function King(){
//     const[loading,setloading]=useState("hello good morning")
//     return(
//         <div>
//             < context.Provider value={loading}>
//             <h3>main compenonts</h3>
//             <King1/>
//             </context.Provider>
//         </div>
//     )
// }

// function King1(){
//     return(
//         <div>
//             <h3>second componet</h3>
//             <King2/>

//         </div>
//     )
// }
// function King2(){
//     return(
//         <div>
//             <h3>third componet</h3>
//             <King3/>

//         </div>
//     )
// }
// function King3(){
//     const value=useContext(context)
//     return(
//         <div>
//             <h3>last componet{value}</h3>

//         </div>
//     )
// }





// how to implement on local storge in  form vallidation {use state }=====>


// function Love(){
//     const [name,setName]=useState("")
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const [cpassword,setCpassword]=useState("")

//     const handleName=(e)=>{
//         setName(e.target.value)
//     }
//     const handleEmail=(e)=>{
//         setEmail(e.target.value)
//     }  
//     const handlePassword=(e)=>{
//         setPassword(e.target.value)
//     }
//     const handleCpassword=(e)=>{
//         setCpassword(e.target.value)
        
//     }

//     const handleSubmit=()=>{
//         if(name.length < 6){
//             alert("enter the value atlest > 6 charcater")
//         }
//         else if(password !== cpassword){
//             alert("password does not match")
//         }
//         else{
//             alert("successfully sumbit")
//         }
//         localStorage.setItem("name",name)
//         localStorage.setItem("email",email)
//         localStorage.setItem("password",password)
//         localStorage.setItem("cpassword",cpassword)

//     }

//     const handleClick=(event)=>{
//         const a=localStorage.getItem("email",email)
//         const b=localStorage.getItem("password",password)

//         if(email !==a && password !==b){
//             alert("infromation not match")
//         }
//         else{
//             alert("successfullu submit")

//         }
//         window.location.href="https://www.google.com/search?q=powestar+img&rlz=1C1CHBF_enIN1001IN1001&sxsrf=ALiCzsZWaVLiv1AH5sy7NCZBNcgfhT46OA%3A1670050044171&ei=_PCKY8aLCpebseMP5puksAQ&ved=0ahUKEwjG-Y6d7dz7AhWXTWwGHeYNCUYQ4dUDCA8&uact=5&oq=powestar+img&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIGCAAQHhANMgYIABAeEA0yCAgAEAUQHhANMggIABAFEB4QDToICAAQogQQsAM6CggAEB4QogQQsANKBAhBGAFKBAhGGABQggZYggZg8kpoAXAAeACAAewBiAHWA5IBAzItMpgBAKABAcgBA8ABAQ&sclient=gws-wiz-serp#imgrc=XItdmCjDOkUSlM"
//     }
   


//     return(
//         <div>
//             <from onSubmit={handleSubmit}>
//                 <label>full name:</label>
//                 <input  value={name} type="text" required  onChange={handleName}/>
//                 <br/><br/>
//                 <label>email:</label>
//                 <input value={email} type="email" required  onChange={handleEmail}/>
//                 <br/><br/>
//                 <label>password:</label>
//                 <input  value={password} type="password" required  onChange={handlePassword}/>
//                 <br/><br/>
//                 <label> cpassword:</label>
//                 <input value={cpassword}  type="cpassword" required  onChange={handleCpassword}/>
//                 <br/><br/>
//                 <button onClick={handleSubmit}>Sign Up</button>
//                 <button  onClick={handleClick}>Login</button>
//             </from>

//         </div>
//     )
// }
// export default Love;

// how to textarea enter the value =========>

//  class King extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             Number:480
//         }
//     }
//     handleNavi=(e)=>{
//         let x=e.target.value.length
//         let y=this.state.Number
//         let sunil=y-1
//         this.setState({Number:sunil})
//         if(sunil <=1){
//             document.getElementById("hello").style.color="red"
//         }

//          else{
//             document.getElementById("hello").style.color="blue"
//          }   
//     }
//     render(){
//         return(
//             <div>
//                 <textarea onChange={this.handleNavi} rows="10" columns="50"></textarea>
//                 <p id="hello">minum character {this.state.Number}</p>
//             </div>
//         )
//     }
//  }
//  export default King;

// import React from "react";
// class King extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             name:"naveen",
//             value:"chinna"
//         }
//     }
//     componentDidMount(){
//         alert("we are larning withe the recat js")
//     }
//     render(){
//         return(
//             <div>
//                 <p>{this.state.name}{this.state.value}</p>
//                 <p id="hello"></p>

//             </div>
//         )
//     }
//     componentDidMount(){
//     setTimeout(()=>{
//         this.setState({
//             name:"besant technology"

//         })
    
//     },2000)
// }
// componentDidMount(){
//     alert("naveen is the good boy ?")
// }
// componentDidUpdate(){
//     document.getElementById("hello").innerHTML="updated state is"+this.state.name
// }
// }
//  export default King;


// class King extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             millisec:"0",
//             sec:"0",
//             min:"0"
//         }
//     }
//     ma=()=>{
//        this.state.millisec=this.state.state.millisec+1
//        if(this.state.millisec==60){
//         this.state.sec+1
//         this.state.millisec==0
//         if(this.state.sec==60){
//             this.state.min+1
//             this.state.sec=0
//             if(this.state.min==60){
//                 this.state.hour+1
//                 this.state.min=0
//             }
//         }
//        }
//        document.getElementById("navi").innerHTML=`$`
//     }
//     render(){
//         return(
//             <div>
//                 <div>
//                     <p id="navi"></p>
//                 </div>
//             </div>
//         )
//     }
// }


// import React from React;
// return(
//     <div>
//         <p>{this.state.name}{this.state.value}</p>
//         <button onClick={this.change}>upadte</button>
//         <button onClick={this.delete}>delete</button>    
//         </div>
// )

// import React, { useContext, useState } from "react"
// import { Form } from "react-router-dom"

// import { useState } from "react";



// componentDidMount(){
//     setTimeout(()=>{
//         this.setState({
//             name:"besant technologys"
//         })
//     },2000)
// }
// componentWillUpdate(){
//     alert("we have to upadte to this state")
// }


//props=======================>

// import React from "react"
// function King(props){
//     return(
//         <div>
//             firstname:{props.fname}<br></br>
//             lastname:{props.lname}<br></br>
//             age:{props.age}<br></br>
//             city:{props.city}
//         </div>
//     )
// }
// function App(){
//     return(
//         <div>
//             <h1>child component</h1>
//             <King fname="naveen" lname="yakkaluru" age="25" city="tadiparti"/>

//         </div>
//     )
// }
// export default App;

//states=========>
// 1.constructor------>

// import React from "react";
// class Navi extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             name:"naveen",
//             city:"tadipatri",
//             age:"25"
//         }
//     }
//     handelChange=()=>{
//         this.setState({
//             name:"mahesh kumar",
//             city:"amrican",
//             age:"26"
//         })
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.name}<br></br>
//                 {this.state.city}<br></br>
//                 {this.state.age}<br></br>
//                 <button onClick={this.handelChange}> change</button>
//             </div>
//         )
//     }
// }
// export default Navi;

// increment and decrement=========>

// import React from "react";
// class Navi extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             value:0
//         }
//     }
//     handleInc=()=>{
//         this.setState({
//             value:this.state.value+1
//         })
//     }
//     handleDec=()=>{
//         this.setState({
//             value:this.state.value-1
//         })
//     }
//     handleRest=()=>{
//         this.setState({
//             value:0
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <p>{this.state.value}</p>
//                 <button onClick={this.handleInc}>Inc</button>
//                 <button onClick={this.handleDec}>Dec</button>
//                 <button onClick={this.handleRest}>rest</button>
//             </div>
//         )
//     }
// }
// export default Navi;

//  Hooks============>
// 1.use states----->

// function App(){
//     const [firstname,setfirstname]=useState()
//     const [lastname,setlastname]=useState()
//     const [password,setpassword]=useState()
//     const [confirampassword,setconfirampassword]=useState()

//     const handleFist=(e)=>{
//         setfirstname(e.target.value)
//     }
//     const handleLast=(e)=>{
//         setlastname(e.target.value)
//     }
//     const handlePssword=(e)=>{
//         setpassword(e.target.value)
//     }
//     const handleCpssword=(e)=>{
//         setconfirampassword(e.target.value)
//     }
//      const handleSubmited=()=>{
//         if(firstname <5){
//             alert("altest >6 characters")
//         }
//         else if(password !== confirampassword){
//             alert("password does not match")
//         }
//         else{
//             alert("sucessfully sumbited")
//             localStorage.setItem("firstname",firstname)
//             localStorage.setItem("lasatname",lastname)
//             localStorage.setItem("password",password)
//             localStorage.setItem("confirampassword",confirampassword)
//         }
    
//         }

    
//     return(
//         <div>
//             <form onSubmit={handleSubmited}>
//                 <label>first name:</label>
//                 <input type="text" placeholder="text" value={firstname} onChange={handleFist}/>
//                 <br/><br/>
//                 <label>last name:</label>
//                 <input type="text" placeholder="text" value={lastname} onChange={handleLast}/>
//                 <br/><br/>
//                 <label>password:</label>
//                 <input type="password" placeholder="password" value={password} onChange={handlePssword}/>
//                 <br/><br/>
//                 <label>confirampassword:</label>
//                 <input type="password" placeholder="password" value={confirampassword} onChange={handleCpssword}/>
//                 <br/><br/>
//                 <button>upadte</button>
//             </form>
//         </div>
//     )
// }
// export default App;

//  const context=React.createContext

// function App(){
//     const [loading,setloading]=useState("naveen")
 
//     return(
//         <context.Provider value={loading}>
//             <div>naveen kumar<App1/></div>
//         </context.Provider>
//     )
// }
// function App1(){
//     return(
//         <context.Provider>
//             <div>naveen kumar <App2/></div>
//         </context.Provider>

//     )
// }
// function App2(){
//     const[value={context}]=useContext()
//     return(
//         <context.Provider>
//             <div>naveen kumar{value} <App3/></div>
        
//         </context.Provider>
//     )
// }
// function App3(){
//     return(
//         <context.Provider>
//             <div>naveen kumar</div>
//         </context.Provider>
//     )
// }
// export default App;

// calss based using in TODO list using local stoarge========>


// import React from "react";
// class King extends React.Component{
//     constructor(){
//         super();
//         this.input=React.createRef()
//         this.state={
//             list:[]
//         }
//     }

//     addTodo=(e)=>{
//         const items={
//             value:this.input.current.value
//         }
//         if(localStorage.getItem("list")===null){
//             const list=[]
//             list.push(items)
//             localStorage.setItem("list",JSON.stringify(list))
//         }
//         else{
//             const list=JSON.parse(localStorage.getItem("list"))
//             list.push(items)
//             localStorage.setItem("list",JSON.stringify(list))

//         }
//         this.setState({
//             list:JSON.parse(localStorage.getItem("list"))
//         })
//     }
//     componentDidMount(){
//         const list=window.localStorage.getItem("list")
//         const data=JSON.parse(list)
//         if(list == null){
//             return false
//         }
//         else{
//             this.setState({
//                 list:data
//             })
//         }
//     }

//     deleteItem=()=>{
//         const naveen=JSON.parse(localStorage.getItem("list"))
//         naveen.splice(0,1)
//         this.setState({
//             list:naveen
//         })
//         localStorage.setItem("list",JSON.stringify(naveen))

//     }


//     render(){
//         return(
//             <div>
//                 <input  type="text" ref={this.input}/>
//                 <button onClick={this.addTodo}> ADD</button>


// {this.state.list.map((items)=>{
//     return(
//         <li>{items.value}
//         <button onClick={this.deleteItem}>Remove</button>
        
//         </li>
//     )
// })}



                
//             </div>
//         )
//     }
// }
// export default King;

// function King(){
//     const[loading,setloading]=useState(0)
//     useEffect(()=>{
//         setTimeout(()=>{
//             setloading(loading+1)
//         },2000)
//     })
//     return(
//         <div>
//             <h3>naveen{loading}</h3>
//         </div>
//     )
// }
// export default King;

//  Life cycle=====>

// import React from "react";
// class King extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             value:"naveen account activity",
//             subject :"Full stack python developer"

//       }
//     }
//     componentWillMount(){
//         alert("fist")
//     }
//     render(){
//         return(
//             <div>
//                 <p>{this.state.value} {this.state.subject}</p>
//                 <button onClick={this.Navi}>ADD</button>
//                 <p id="navi"></p>
                

//             </div>
//         )
//     }

//     Navi=()=>{
//         this.setState({
//             value:"nnnnnnnnnnnn",
//             subject:"kkkkkkkkkk"
//         })

//     }
//     componentDidMount(){
//        setTimeout(() => {
//         this.setState({
//             value:"nnnnnnnnnnnn",
//             subject:"kkkkkkkkkkk"
//         })
        
//        },2000);
//     }

//     componentWillUpdate(){
//         alert("second")
//     }
//     componentDidUpdate(){
//         document.getElementById("navi").innerHTML="spspspspspp"+ this.state.value

//     }
// }

// export default King;


//Reg express used to how to loacal storge in login form and sign in form{different name}=========>

// import React from "react";
// class Reg extends React.Component{
//     constructor(){
//        super();
//        this.state={
//         Fname:"",
//         Email:"",
//         Password:"",
//         Cpassword:"",
//         Fname1:"",
//         Password1:""

//        }
//     }
//     handleFname=(e)=>{
//     this.setState({
//        Fname:e.target.value
//         })
//     }
//     handleEmail=(e)=>{
//         this.setState({
//            Email:e.target.value
//             })
//         }
//         handlePassword=(e)=>{
//             this.setState({
//                Password:e.target.value
//                 })
//             }
//             handleCpassword=(e)=>{
//                 this.setState({
//                    Cpassword:e.target.value
//                     })
//                 }
//     handleChange=()=>{
//      const  pattern=/^[A-Z]?[a-z]+[0-9]+[@#%^&*$]+$/
//      // ?==> 0 or 1 time
//      // +==> 1 or more time
//      // *==> 0 or more time
//         if(!pattern.test(this.state.Fname)){

//             console.log("Failure")
//             alert("THIS IS notVLAID")
//         }
//         // else{
//         //     console.log("failure")
//         //     alert("this is invalid")
//         // }
//         else if(this.state.Password!==this.state.Cpassword){
//             alert("password does not match")
//         }
//         else{
//             localStorage.setItem("Name",this.state.Fname)
//             localStorage.setItem("Password",this.state.Password)
//             alert("Form is submitted")
//         }
//     }

//     handleFname1=(f)=>{
//         this.setState({Fname1:f.target.value})
//     }

//     handlePassword1=(f)=>{
//         this.setState({Password1:f.target.value})
//     }

//     handleLogin=()=>{
//         let a=localStorage.getItem("Name")
//         let b=localStorage.getItem("Password")
//         if(this.state.Fname1!==a){
//             alert("Name is not match")
//         }
//         else if(this.state.Password1!==b){
//             alert("Password does not match")
//         }
//         else{
//             alert("Login the Page")
//         }
        
//     }
//     render(){
//         return(
//             <div>
//                 <h1>SignIn</h1>
//                 <form onSubmit={this.handleChange}>
//                 <label>Name:</label>
//                 <input type="text" value={this.state.Fname} onChange={this.handleFname} />

//                 {/* //<button onClick={this.handleChange}>Click</button> */}
//                 <br/><br/>

//                 <lable>Email:</lable>
//                 <input type="email" value={this.state.Email} onChange={this.handleEmail} />
//                 <br/><br/>
//                 <lable>Password:</lable>
//                 <input type="password" value={this.state.Password} onChange={this.handlePassword} />
//                 <br/><br/>
//                 <label>Confirm Password:</label>
//                 <input type="password" value={this.state.Cpassword} onChange={this.handleCpassword} />
//                 <br/><br/>
                
//                 <input type="submit" value="Signin"/>

//                 </form>

//                 <br/><br/>

//                 <h1>Login</h1>
//                 <form onSubmit={this.handleLogin}>
//                     <label>Name:</label>
//                     <input type="text" value={this.state.Fname1} onChange={this.handleFname1} />
//                     <br/><br/>
//                     <label>Password:</label>
//                     <input type="password" value={this.state.Password1} onChange={this.handlePassword1} />
//                     <br/><br/>
//                     <input type="submit" value="Login" />
//                 </form>
//             </div>

//         )
//         }
                       
//       }
// export default Reg;



// Hooks basic=======>
// import { useState } from "react";
// function King(){
//     const[Loding,setloading]=useState(0)

//     const chanage=()=>{
//         setloading(Loding+1)
//     }
//     const chanage2=()=>{
//         setloading(Loding-1)
//     }
//     const chanage3=(a)=>{
//         setloading(a.target.value)
//     }

//     return(
//         <div>
//             <p>{Loding}</p>
//            <input onChange={chanage3}/>
//            <button onClick={chanage}>INcrement</button>
//            <button onClick={chanage2}>decrement</button>
//         </div>
//     )
// }
// export default King;



// function Navi(){

//   const [name,setName]=useState("")
//   const [email,setEmail]=useState("")
//   const [password,setPassword]=useState("")
//   const [cpassword,setCpassword]=useState("")


//   const naveenName=(e)=>{
//     setName(e.target.value)
//   }

//   const naveenEmail=(e)=>{
//     setEmail(e.target.value)
//   }
  
//   const naveenPassword=(e)=>{
//     setPassword(e.target.value)
//   }
  
//   const naveenCpassword=(e)=>{
//     setCpassword(e.target.value)
//   }

//   const handleSubmit=()=>{
//     if(name.length <6){
//         alert("enter the name atlest > character")
//     }
//     else if(password !== cpassword){
//         alert("password does not match")
//     }
//     else{
//         alert("naveen Deatil succesfully  sumbited")
//     }
//   }
//     return(
//         <div>
//             <form style={{textAlign:"center",background:"green"}} onChange={handleSubmit}>
//             <br/><br/>
//                 <label>Fist name:</label>
//                 <input type="text" placeholder="text" value={name} required onChange={naveenName}/>
//                 <br/><br/>
//                 <label>Email:</label>
//                 <input type="email" placeholder="eamil" value={email} required onChange={naveenEmail} />
//                 <br/><br/>
//                 <label>Password:</label>
//                 <input type="password" placeholder="password" value={password} required onChange={naveenPassword}/>
//                 <br/><br/>
//                 <label>Cpassword:</label>
//                 <input type="cpassword" placeholder="cpassword" value={cpassword} required onChange={naveenCpassword}/>

//                 <br/><br/>
//                 <button onChange={handleSubmit}>ADDING</button>
                
//             </form>
//         </div>
//     )
// }
// export default Navi;



//function Love(){
    //     const [name,setName]=useState("")
    //     const [email,setEmail]=useState("")
    //     const [password,setPassword]=useState("")
    //     const [cpassword,setCpassword]=useState("")
    
    //     const handleName=(e)=>{
    //         setName(e.target.value)
    //     }
    //     const handleEmail=(e)=>{
    //         setEmail(e.target.value)
    //     }  
    //     const handlePassword=(e)=>{
    //         setPassword(e.target.value)
    //     }
    //     const handleCpassword=(e)=>{
    //         setCpassword(e.target.value)
            
    //     }
    
    //     const handleSubmit=()=>{
    //         if(name.length < 6){
    //             alert("enter the value atlest > 6 charcater")
    //         }
    //         else if(password !== cpassword){
    //             alert("password does not match")
    //         }
    //         else{
    //             alert("successfully sumbit")
    //         }
    //         localStorage.setItem("name",name)
    //         localStorage.setItem("email",email)
    //         localStorage.setItem("password",password)
    //         localStorage.setItem("cpassword",cpassword)
    
    //     }
    
    //     const handleClick=(event)=>{
    //         const a=localStorage.getItem("email",email)
    //         const b=localStorage.getItem("password",password)
    
    //         if(email !==a && password !==b){
    //             alert("infromation not match")
    //         }
    //         else{
    //             alert("successfullu submit")
    
    //         }
    //         window.location.href="https://www.google.com/search?q=powestar+img&rlz=1C1CHBF_enIN1001IN1001&sxsrf=ALiCzsZWaVLiv1AH5sy7NCZBNcgfhT46OA%3A1670050044171&ei=_PCKY8aLCpebseMP5puksAQ&ved=0ahUKEwjG-Y6d7dz7AhWXTWwGHeYNCUYQ4dUDCA8&uact=5&oq=powestar+img&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDTIGCAAQHhANMgYIABAeEA0yCAgAEAUQHhANMggIABAFEB4QDToICAAQogQQsAM6CggAEB4QogQQsANKBAhBGAFKBAhGGABQggZYggZg8kpoAXAAeACAAewBiAHWA5IBAzItMpgBAKABAcgBA8ABAQ&sclient=gws-wiz-serp#imgrc=XItdmCjDOkUSlM"
    //     }
       
    
    
    //     return(
    //         <div>
    //             <from onSubmit={handleSubmit}>
    //                 <label>full name:</label>
    //                 <input  value={name} type="text" required  onChange={handleName}/>
    //                 <br/><br/>
    //                 <label>email:</label>
    //                 <input value={email} type="email" required  onChange={handleEmail}/>
    //                 <br/><br/>
    //                 <label>password:</label>
    //                 <input  value={password} type="password" required  onChange={handlePassword}/>
    //                 <br/><br/>
    //                 <label> cpassword:</label>
    //                 <input value={cpassword}  type="cpassword" required  onChange={handleCpassword}/>
    //                 <br/><br/>
    //                 <button onClick={handleSubmit}>Sign Up</button>
    //                 <button  onClick={handleClick}>Login</button>
    //             </from>
    
    //         </div>
    //     )
    // }
    // export default Love;
    
    // how to textarea enter the value =========>
    
    //  class King extends React.Component{
    //     constructor(){
    //         super();
    //         this.state={
    //             Number:480
    //         }
    //     }
    //     handleNavi=(e)=>{
    //         let x=e.target.value.length
    //         let y=this.state.Number
    //         let sunil=y-1
    //         this.setState({Number:sunil})
    //         if(sunil <=1){
    //             document.getElementById("hello").style.color="red"
    //         }
    
    //          else{
    //             document.getElementById("hello").style.color="blue"
    //          }   
    //     }
    //     render(){
    //         return(
    //             <div>
    //                 <textarea onChange={this.handleNavi} rows="10" columns="50"></textarea>
    //                 <p id="hello">minum character {this.state.Number}</p>
    //             </div>
    //         )
    //     }
    //  }
    //  export default King;
    
    import React from "react";
    class Lifecycle extends React.Component{
        constructor(){
            super();
            this.state={
                name:"naveen",
                value:"chinna"
            }
        }
        componentDidMount(){
            alert("we are larning withe the recat js")
        }
        render(){
            return(
                <div>
                    <p>{this.state.name}{this.state.value}</p>
                    <p id="hello"></p>
    
                </div>
            )
        }
        componentDidMount(){
        setTimeout(()=>{
            this.setState({
                name:"besant technology"
    
            })
        
        },2000)
    }
    componentDidMount(){
        alert("naveen is the good boy ?")
    }
    componentDidUpdate(){
        document.getElementById("hello").innerHTML="updated state is"+this.state.name
    }
    }
     export default Lifecycle;
