
// import React, { Component, useState } from "react"

// const APP=()=>{

//  const [ inputList, setInputList]= useState (" ");
//  const [items,setItems] = useState([]);

//  const itemEvent =(e)=>{
//     setInputList(e.target.value);
//    };

//  const listofItems= () => {
//    setItems((oldItems) => {
//     localStorage.setItem("list",inputList)
//     return[...oldItems,inputList];
//    });
//  };

//  const deleteHandler=(indexValue)=>{
//     const newItems=items.filter((inputList,index)=>index !== indexValue)
//     setItems(newItems)
//  }

//     return(
//         <div className="navi">
//             <div className="center">
//                 <br></br>
//                 <h1>ToDO List</h1>
//                 <br></br>
//                 <input type="text" placeholder="" onChange={itemEvent}/>
//                 <button onClick={listofItems}>ADD</button>

//                 <ol>
//                    {/* { <li>{inputList}</li> } */}

//                  {items.map((itemval,index)=>{
//                  return <li key={index}>{itemval}&nbsp;&nbsp;&nbsp;<button onClick={()=>deleteHandler(index)} >X</button></li> 
//                  })}
//                 </ol>

//             </div>

//         </div>
//     )

// }
// export default APP;

// import { useState } from "react";
// function APP(){
//   const [inputList,setInputList]=useState("")

//   const handelChange=(e)=>{
//     setInputList(e.target.value);
//   };

//   return(
//     <div>
      
//       <input onChange={handelChange} type="text" placeholder="text"/>
//       <button onClick={handelChange}>ADD</button>
//       <ul>value={inputList}</ul>
//     </div>
//   )
// }
// export default APP;
// TODo list using local storage=====>




//   import React  from "react"
//     class App extends React.Component{
//         constructor(){
//             super();
//             this.input=React.createRef()   //<------- creatRef() mean intial value
//             this.state={
//                 list:[]
//             }
//         }
//         addTodo=(e)=>{
//             const items={
//                 value:this.input.current.value
//             }
//             if(localStorage.getItem("list")===null){
//                 const list=[]
//                 list.push(items)
//                 localStorage.setItem("list",JSON.stringify(list))
//             }
//             else{
//                 const list=JSON.parse(localStorage.getItem("list"))
//                 list.push(items)
//                 localStorage.setItem("list",JSON.stringify(list))

//             }
//             this.setState({
//                 list:JSON.parse(localStorage.getItem("list"))
//             })
//         }


//         componentDidMount(){
//              const List=window.localStorage.getItem("list")
//              const data=JSON.parse("list")
//              if("list"== null){
//                 return false
//              }
//              else{
//                 this.setState({
//                     list:data
//                 })
//              }
//         }
//         deleteItem=()=>{
//             const value=JSON.parse(localStorage.getItem("list"))
//             value.splice(0,1)
//             this.setState({
//                 list:value

//             })
//             localStorage.setItem("list",JSON.stringify(value))
//         }
//         render(){
//             return(
//                 <div>
//                     <input type="text" ref={this.input}/>
//                     <button onClick={this.addTodo}>Add</button>


//     {this.state.list.map((items)=>{
//         return(
//             <li>{items.value}
//             <button onClick={this.deleteItem}>Remove</button>
//             </li>
//         )
//     })}
//         </div>
//             )
//         }
//     }
//     export default App;




