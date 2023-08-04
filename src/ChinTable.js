import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ChinTable(){
    const[data,setData]=useState(null)
    const navigate=useNavigate()
    useEffect(()=>{
        fetch(" http://localhost:3006/employe")
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
        fetch("http://localhost:3006/employe/"+id,{
            method:"DELETE"

        })
        .then(()=>{
            alert("Delete successfully")
            window.location.reload()
        })

    }

    const Edit=(id)=>{
        navigate("/ChinEdit/"+id)


    }


    return(
        <div>
            <div className="card">
                <div className="card-title">
                    <h3>Empolyee management system</h3>
                </div>
                
                <div className="card-body"> 
                    <Link to="ChinForm" className="btn btn-success">ADD New+</Link>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data &&
                            data.map(item=>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                    <a className="btn btn-success">Details</a>
                                    <a onClick={()=>{Edit(item.id)}} className="btn btn-danger">Edit</a>
                                    <a onClick={()=>{Delete(item.id)}} className="btn btn-primary">Delete</a>
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
export default ChinTable;