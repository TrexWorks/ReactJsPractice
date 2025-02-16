import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyOptions from "./hooks/useCurrencyOptions";
import useCurrencyInfo from "./hooks/useCurrencyInfo";


function App() {
const [toLabel,setToLabel] = useState('inr');
const [fromLabel,setFromLabel] = useState('usd');
const [amount,setAmount] = useState(0);
const [convertedAmount,setConvertedAmount] = useState(0);

const currencyOptions = useCurrencyOptions() || {};
// console.log("currencyOptions",currencyOptions);
const currencyArray = Object.entries(currencyOptions).map(([key, object]) => ({
  value : key,
  displayValue : object
}));

const currencyDetails = useCurrencyInfo(fromLabel);

const convertCurrency = () => {
  console.log("currencyDetails",currencyDetails);
  console.log("fromLabel",toLabel);
  console.log("currencyDetails[toLabel]",currencyDetails[toLabel]);
  
  setConvertedAmount(Math.floor(currencyDetails[toLabel] * amount));
  
}


  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://images.pexels.com/photos/14447330/pexels-photo-14447330.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convertCurrency();
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              onAmountChange = {(val) => {
                                setAmount(val)
                              }}
                              selectCurrency={fromLabel}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              selectCurrency={toLabel}
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );

}

export default App;