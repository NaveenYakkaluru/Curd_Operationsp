
const count=0

function Reducer(state=count,action){
    const{type,payload}=action
    switch(type){
    case "INCREMNET":
        return state+1
    case "DECREMENT":
        return state-1
    default:
        return state
    }

}
export default Reducer;
