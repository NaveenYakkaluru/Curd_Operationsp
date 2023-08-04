import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function EmpTable(){
    const [data,setData]=useState("")
    useEffect(()=>{
        fetch("http://localhost:3006/employe")
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            setData(resp)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])

      const Delete=(id)=>{
        fetch("http://localhost:3006/employe"+id,{
            method:"DELETE"

        })
        .then(()=>{
            alert("Deleted successfully")
            window.location.reload()
        })

      }


    return(
        <div>
            <div className="card">
                <div className="card-title">
                    <h3>employee Management system</h3>

                </div>

                <div className="card-body">
             <Link to="/EmpForm" className="btn btn-success">Add New(+)</Link>
                    <table className=" table table-bordered">
                    <thead className="bg-dark text-light">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Moblie</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data &&
                        data.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <a className="btn btn-primary">Details</a>
                                    <a className="btn btn-success">Edit</a>
                                    <a onClick={()=>{Delete(item.id)}} className="btn btn-danger">Delete</a>
                                    
                                </td>

                            </tr>
                        ))}

                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default EmpTable;