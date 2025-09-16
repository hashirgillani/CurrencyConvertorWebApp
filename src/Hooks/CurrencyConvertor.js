// BASE URL = https://v6.exchangerate-api.com/v6/a90f22f37bced83b5d45823d/latest/USD 
import { useEffect,useState } from "react";
function Currency_Convertor(from_country){
    const [data,setdata] = useState({});
    useEffect(()=>{

        fetch(`https://v6.exchangerate-api.com/v6/a90f22f37bced83b5d45823d/latest/${from_country}`)
        .then((res)=>(res.json()))
        .then((response_data)=> setdata(response_data.conversion_rates));
        

    },[from_country])

    return data;
}

export default Currency_Convertor;