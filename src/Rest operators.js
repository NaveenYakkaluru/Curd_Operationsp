
function Sum(...args){
    let total=0;
    for(const arg of args){
        total += arg;
    }
    return total;
}
export default Sum;

Sum(1,1)
Sum(1,2,3);
Sum(2,4,6,7,10);