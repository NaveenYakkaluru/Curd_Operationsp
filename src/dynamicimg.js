// import React from "react"
// class App extends React.Component{
//     render(){
//         const [img,para,title]=this.props.info
//         return(
//             <div>
//                 <img src={img}/><br/>
//                 Heading:{para}<br/>
//                 title:{title}<br/>
//             </div>
//         )
//     }    
//     }
//     class App1 extends React.Component{
//         state={
//             people:[
//                 {img:"https://th.bing.com/th/id/OIP.Qg5z9vS19qcRcndI-Sxm9wHaHa?pid=ImgDet&rs=1",para:"i am going to the future planning on gthe nature",title:"Nature"},
//                 {img:"https://fastly.4sqi.net/img/general/600x600/22437668_MXZ5FE2I4kimwcE7ZEGUfR2e06AxTBLE0G5AoBNf0QY.jpg",para:"i am going to the future planning on gthe nature",title:"LOcaton"}
//             ]
//         }
//         render(){
//             return(
//                 <div>
//                     {this.state.people.map(item=>(
//                         <App info={item}/>
//                     ))}
//                 </div>

//             )
//         }     
//         }
//         export default App1;



import React from "react"

class App extends React.Component{
   
    render(){
        const [img,para,title]=this.props.info
        return(
            <div>
                <img src={img}/><br/>
                Heading:{para}<br/>
                title:{title}
            </div>
        )
    }
}
class App1 extends React.Component{
    state={
        navi:[
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-3382ZgdUhzsOz0VYE8KVNtX_HTwTxRSps08Nli1&s",Heading:"NAVEEE ISTH vwbvma mvv mmnjksvb",title:"HTml"}

        ]
    }
    render(){
        return(
            <div>
         {this.state.navi.map(item=>(
            <App info={item}/>

         ))}
            </div>
        )
    }
}
export default App1;