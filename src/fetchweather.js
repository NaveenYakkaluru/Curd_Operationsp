import axious from"axios"
const API_key="ef1e14459b6aa9546411dc6f00a007ba"
const URL="https://api.openweathermap.org/data/2.5/weather"


const fetchWeather= async (query)=>{
   let {data}= await axious.get( URL,{
        params:{
           q: query,
           units:"metric",
           APPID: API_key

        }
    })
    return data
}
export default fetchWeather;