import { useState } from "react";  
import "./BillMgt.css";  
  
function BillMgt(){  
    const[bread,setBread]=useState(0)  
    const[breads,setBreads]=useState(0)  
    const[wine,setWine]=useState(0)  
    const[wines,setWines]=useState(0)  
    const[rice,setRice]=useState(0)  
    const[rices,setRices]=useState(0)  
    const[milk,setMilk]=useState(0)  
    const[milks,setMilks]=useState(0)  
    const[total,setTotal]=useState(0)  
    const[totals,setTotals]=useState(0)  
    const[sym,setSym]=useState("$")
    const[syms,setSyms]=useState("$")
    const[symss,setSymss]=useState("$")
    const[symsss,setSymsss]=useState("$")
    const[symssss,setSymssss]=useState("$")
    
   const chnageBread=(a)=>{  
    setBread(a.target.value)  
    setBreads(a.target.value*20)  
   }  
   const chnageWine=(a)=>{  
    setWine(a.target.value)  
    setWines(a.target.value*200)  
   }  
   const chnageRice=(a)=>{  
    setRice(a.target.value)  
    setRices(a.target.value*1000)  
   }  
   const chnageMilk=(a)=>{  
    setMilk(a.target.value)  
    setMilks(a.target.value*10)  
   }  
   const chnageTotal=()=>{  
    setTotal(parseInt(bread)+parseInt(wine)+parseInt(rice)+parseInt(milk))  
    setTotals(parseInt(breads)+parseInt(wines)+parseInt(rices)+parseInt(milks))  
   }  
   const chnageRecipt=()=>{  
    
      
   }  
     
    return(  
        <div>  
           <center><h3 className="a">Billing Manangement System</h3></center>  
           <br/>  
  
         <div>  
            <table>  
                <thead>  
                    <tr>  
                        <td><b>items</b></td>  
                        <td><b>Number of items</b></td>  
                        <td><b>Cost of items</b></td>  
                      
                    </tr>  
                </thead>  
                <tbody>  
                    <tr>  
                       <td><b>Bread</b></td>  
                       <td><input type={"number"}  value={bread} onChange={chnageBread}/></td>
                       <span>{syms}</span>
                       <td><input type={"number"} value={breads} onChange={chnageBread}/></td>  
                       </tr>  
                      <br/>  
  
                       <tr>  
                        <td><b>Wine</b></td>  
                        <td><input type={"number"}  value={wine} onChange={chnageWine}/></td>
                        <span>{symss}</span>  
                        <td><input type={"number"}  value={wines} onChange={chnageWine}/></td>  
                        </tr>  
                        <br/>  
  
                        <tr>  
                        <td><b>Rice</b></td>  
                        <td><input type={"number"} value={rice}onChange={chnageRice} /></td> 
                        <span>{symsss}</span>  
                        <td><input type={"number"} value={rices}onChange={chnageRice}/></td>  
                        </tr>  
                        <br/>  
  
                        <tr>  
                        <td><b>Milk</b></td>  
                        <td><input type={"number"} value={milk} onChange={chnageMilk}/></td>  
                        <span>{sym}</span>
                        <td><input type={"number"}  value={milks} onChange={chnageMilk}/></td>  
                        </tr>  
                        <br/>  
                           
                        <tr>  
                        <td><b>Total</b></td>  
                        <td><input type={"number"} value={total}/></td> 
                        <span>{symssss}</span>
                        <td><input type={"number"}  value={totals}/></td>  
                        </tr>                       
                </tbody>  
            </table>  
         </div>  
  
       
        <div id="suni">  
        <p className="kk"><b>Receipt</b></p>  
         <div id="div"> 
         
         </div> 
        </div>  
         
  
        <div id="mahi">  
            <button id="z" onClick={chnageTotal}><b>Total</b></button>  
            <button id="x"><b>price</b></button>  
            <button id="c"><b>Print</b></button>  
            <button id="v" onClick={chnageRecipt}><b>Receipt</b></button>  
            <button id="b"><b>Exit</b></button>  
        </div>  
  
       </div>  
    )  
}  
export default BillMgt;