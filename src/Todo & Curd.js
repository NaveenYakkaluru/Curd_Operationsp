
import React from "react";
class Todo extends React.Component{
    constructor(){
        super();
        this.input=React.createRef()
        this.input1=React.createRef()
        this.input2=React.createRef()
        this.input3=React.createRef()
        this.state={
            list:[]
        }
    }
    addTodo=()=>{
        const Item={
        value:this.input.current.value,
        value1:this.input1.current.value,
        value2:this.input2.current.value,
        value3:this.input3.current.value
        

        

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
        if(list === null){
            return false
        }
        else{
            this.setState({
                list:value
            })
        }
    }

    delete=()=>{
        const navi= JSON.parse(localStorage.getItem("list"))
        navi.splice(0,1)
        this.setState({
            list:navi
        })
        localStorage.setItem("list",JSON.stringify(navi))
    }

        
  
    render(){
        return(
            <div>
                <br/>
                <label>Full name:</label>
                <input type="text" ref={this.input} placeholder="Full Name ...?"/>
                <br/><br/>
                <label>City:</label>
                <input type="text" ref={this.input1} placeholder="Citey...?"/>
                <br/><br/>
                <label>Mobile no:</label>
                <input type="text" ref={this.input2} placeholder="Mobile...?"/>
                <br/><br/>
                <label>Salary:</label>
                <input type="text" ref={this.input3} placeholder="Salary  ...?"/>
                <br/><br/>
                <button onClick={this.addTodo}>Add</button>
                <br/><br/>
                <button>Remove all</button>

<table>
    <thead>
        <tr>
            <th>FullName</th>
            <th>City</th>
            <th>Mobile</th>
            <th>Salary</th>
            <th>Action</th>
        </tr>
    </thead>




                {this.state.list.map((item)=>{
                    
                    return(
                    
                    // <ul key={item}>
                    //      <li>{item.value}
                    //     <button onClick={this.delete}>remove</button>
                    //     </li>
                    // </ul>

            <tbody>
                <tr key={item}>
                    <td>{item.value}</td>
                    <td>{item.value1}</td>
                    <td>{item.value2}</td>
                    <td>{item.value3}</td>
                    
                    <td>
                        <button onClick={this.delete}>Delte</button>
                    </td>

                </tr>
            </tbody>



                    )
                })} 




</table>

            </div>
        )
    }
}
export default Todo;