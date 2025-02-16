import { useEffect, useState } from "react";

function useCurrencyOptions(){
    const [data,setData] = useState()
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
      .then((res) => res.json())
      .then((res) => setData(res)) 
     
    }, [])
    return data;
}

export default useCurrencyOptions;