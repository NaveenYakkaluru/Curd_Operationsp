import{ useEffect, useState } from "react";


function OTP3(){
    const[data,setData]=useState(null)
    useEffect(()=>{
        fetch("http://localhost:3006/posts")
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            setData(resp)
        })
    })   
    return(
        <div style={{backgroundColor:"skyblue"}}>
            <h4>Mobile Number List</h4>
            <table>
                <th>
                    <tr>
                        <td>Email / phone Number</td>
                        <td>Action</td>
                    </tr>
                </th>
                <tbody>
                    {data &&
                    data.map(item=>(
                        <tr key={item.data}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                        </tr>
                    ))}
                </tbody>
              
            </table>

        </div>
    )
}
export default OTP3;

