
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function ChinEdit(){
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")


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

    const navigate=useNavigate()

    const changeId=(e)=>{
        setId(e.target.value)
    }
    const changeName=(e)=>{
        setName(e.target.value)
    }
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const changePhone=(e)=>{
        setPhone(e.target.value)
    }
    

    const handleSubmit=()=>{
        const data={id,name,email,phone}
        fetch("http://localhost:3006/employe",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(()=>{
            alert("successfully saved")
            navigate("/")
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label  className="form-label">ID:</label>
    <input type="text"  value={id}  onChange={changeId} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

   </div>
  <div className="mb-3">
    <label  className="form-label">Name:</label>
    <input type="text" value={name}  onChange={changeName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label  className="form-label">Email:</label>
    <input type="email" value={email}  onChange={changeEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label  className="form-label">Mobile:</label>
    <input type="tel"  value={phone}  onChange={changePhone} className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
           
        </div>
    )
}
export default ChinEdit;