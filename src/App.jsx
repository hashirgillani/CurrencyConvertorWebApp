
import currency_convertor from "./Hooks/CurrencyConvertor";
import  countryList from "./Hooks/CountryFlag";
import Input from "./Components/Input";
import {  useEffect, useState} from "react";
import './App.css'

function App() {
  
        const [from, Setfrom] = useState("USD");
        const [to, Setto] = useState("PKR");
        const [amount, setAmount] = useState(1);
        const [converted_amount, setConvertedAmount] = useState(283.29);
        const [from_flag, set_from_flag_img] = useState("US");
        const [toflag, set_to_flag_img] = useState("PK");
       
        
       const currenct_list = currency_convertor(from);
       const options = Object.keys(currenct_list);
       


       const handelSwap = ()=>{
              Setfrom(to);
              Setto(from);
              setAmount(converted_amount);
              setConvertedAmount(amount);

       }


       const convert =()=>{
           let conversion_rate = parseFloat(amount * currenct_list[to].toFixed(2))

            setConvertedAmount(conversion_rate);
            
       }

       useEffect(()=>{

          for (const key in countryList) {
            if (key == from) {
                  let flag = countryList[key];
                  let img_src = `https://flagsapi.com/${flag}/flat/64.png`;
                  set_from_flag_img(img_src);
                    
                  break;
            }
            
          }
          

       })
       
       ,[from]
       useEffect(()=>{

          for (const key in countryList) {
            if (key == to) {
                  let flag = countryList[key];
                  let img_src = `https://flagsapi.com/${flag}/flat/64.png`;
                  set_to_flag_img (img_src);

                  break;
            }
            
          }
          

       })
       
       ,[to]

  return (
    <>
     <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                   onSubmit={(e)=>(e.preventDefault())}
                >
                    <div className="w-full mb-1">
                      {/* from */}
                          <Input
                          label="From"
                          amount = {amount}
                          currency={from}
                          currency_options_list={options}
                          onAmountChange={(value)=>setAmount(value)}
                          onCurrencyChange={(value=>Setfrom(value))}
                          imgSrc={from_flag}
                          
    
                       
                          />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={handelSwap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                      {/* to */}
                         <Input
                          label="To"
                          amount = {converted_amount}
                          currency={to}
                          currency_options_list={options}
                          onAmountChange={(value)=>setAmount(value)}
                          onCurrencyChange={(value)=>Setto(value)}
                          imgSrc={toflag}
                          readonly= {true}
                       
                          />
                    </div>
                    <button
                      onClick={convert}
                    type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                       
                       
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
