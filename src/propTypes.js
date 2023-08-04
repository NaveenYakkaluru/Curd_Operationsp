//propTypes
import React from "react";
import PropTypes from "prop-types"
 class Robo extends React.Component{
    render(){
      return(
        <div>
          Firstname:{this.props.fname}<br/>
          Lastname:{this.props.lname}<br/>
        </div>
      )
    }
  }

  Robo.propTypes={
    fname:PropTypes.string,
    lname:PropTypes.string
  }

  Robo.defaultProps={
    fname:"Naveen",
    lname:"konidela"
  }
  export default Robo;


  // how to update values======= states>
  import React from "react";
class Naveen extends React. Component{
    constructor(props){
        super();
        this.State={
            name:"naveen",
            city:"tadipatri",
            value:"well come"
        }
    }
      naveenKumar=()=>{
        this.setState({
            name:"chinna",
            city:"ppr",
            value:"send of"

        })
      }


    render(){
        return(
            <div>
                {this.State.name}<br></br>
                {this.State.city}<br></br>
                {this.State.value}
                <br></br>

                <button onClick={this.naveenKumar}>udate</button>
            </div>
        )
    }
}
export default Naveen;
   