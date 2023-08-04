
import React from "react";
class App extends React.Component{
    constructor(){
        super();
        this.input=React.createRef();
        this.state={
            list:[]
        }
    }
    addTODO=()=>{
        const Item={
            value:this.input.current.value
        }
        if(localStorage.getItem("list")===null){
            const list=[]
            list.push(Item)
            localStorage.setItem("list",JSON.stringify(list))
        }
        else{
            const list=JSON.parse(localStorage.getItem("list"))
            list.push(Item)
            localStorage.setItem("list",JSON.stringify(list))
        }
        this.setState({
            list:JSON.parse(localStorage.getItem("list"))
        })
    }
   componentDidMount(){
    const list=window.localStorage.getItem("list")
    const value=JSON.parse(list)
    if(list===null){
        return false
    }
    else{
        this.setState({
            list:value
        })
    }
   }
   delete=()=>{
    const list1=JSON.parse(localStorage.getItem("list"))
    list1.splice(0,1)
    this.setState({
        list:list1
    })
    localStorage.setItem("list",JSON.stringify(list1))
   }
    render(){
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <input type="text" ref={this.input} placeholder="enter something"/>
                <button onClick={this.addTODO}>push</button>
                {this.state.list.map((item)=>{
                    return(
                        <ul key={item}>
                        <li>{item.value}
                        <button onClick={this.delete}>delete</button></li>
                        </ul>
                    )
                })}

            </div>
        )
    }
}
export default App;


