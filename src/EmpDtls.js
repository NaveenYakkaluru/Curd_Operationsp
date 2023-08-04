
import { InputGroup } from "react-bootstrap";
import "./EmpDtls.css";

function EmpDtls(){
    return(
        <div>
            <div className="a">
            <h4>Employe Manangement</h4>
            </div>
            <div class="b">
                <p id="m">Employe Name</p>
                <p id="n">Phoen number</p>
                <p id="o">Email</p>
                <p id="p">Edit/Del</p>
            </div>            
<div class="c">
    Add Employe
</div>
<br/>
     <div class="naviii">
       <h4>Edit Employe details</h4>
       <h4>Back</h4>
     </div>

<div id="kkk">
    <form>
        <label>Employe Name*</label>
        <input type="text"/>
        <br/><br/>
        <label> Phone Number*</label>
        <input type="text"/>
        <br/><br/>
        <label>Emai*</label>
        <input type="email"/>
        <br/><br/>
        <label>Perment Adress*</label>
        <textarea></textarea>
        <br/><br/>
        <label>Adhar*</label>
        <input type="text"/>
        <br/><br/>
        <label>Empolyee Role*</label>
        <input type="text"/>
        <br/><br/>
        <label>Empolyee Branch*</label>
        <input type="text"/>
        <br/><br/>
        <label>password*</label>
        <input type="text"/>
        <br/><br/>

    </form>

</div>

        </div>
    )
}
export default EmpDtls;