
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import OTP1 from "./OTP1"
import OTP3 from "./OTP3"

function OTPROUTRS(){
    const [email,setEmail]=useState("")
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }

    const handleSubmit=(e)=>{
        let data={email}
      fetch("http://localhost:3008/Details",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(data)
      })
      .then(()=>{
        alert("saved succesfully")
      })
      .catch((err)=>{
        console.log(err.message)
      })
    }
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<OTP1/>}/>
                    <Route path="/OTP3" element={<OTP3/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default OTPROUTRS;




