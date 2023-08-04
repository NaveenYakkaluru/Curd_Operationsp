import { useState } from "react";



function EmpForm(){
    const [id,setId]=useState=("")
    const [name,setName]=useState=("")
    const [email,setEmail]=useState=("")
    const [phone,setPhone]=useState=("")

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
            alert("sucessfully saved")
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>ID:</label>
                <input type="text" value={id} onChange={changeId}/>
                <br/><br/>
                <label>Name:</label>
                <input type="text" value={name} onChange={changeName}/>
                <br/><br/>
                <label>Email:</label>
                <input type="email" value={email} onChange={changeEmail}/>
                <br/><br/>
                <label>Moblie no:</label>
                <input type="tel" value={phone} onChange={changePhone}/>
                <br/><br/>
                <button>Submit</button>
         </form>

        </div>
    )
}
export default EmpForm;