import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function JsonTable(){
    const [data,setData]=useState("")
    useEffect(()=>{
        fetch("http://localhost:3006/Curd-Json")
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            setData(resp)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    })
    return(
        <div className="card">
            <div className="card-title">
                <h3>Employee Management System</h3>
            </div>
         
            <div className="card-body">
                <Link to="/Navi" className=" btn btn-success">ADD(+)</Link>
                <table className="table table-bordered">
                    <thead className="bg-dark text-light">
                        <tr>
                            <th>Name</th>
                            <th>Coures</th>
                            <th>city</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                        data.map(item=>(
                            <tr  >
                                <td>{item.name}</td>
                                <td>{item.coures}</td>
                                <td>{item.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default JsonTable;