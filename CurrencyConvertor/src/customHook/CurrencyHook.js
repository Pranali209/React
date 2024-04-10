import { useEffect ,useState } from "react";

// designing custom hoook to fetch the data need data on Currency value
function useCurrency(Currency) {
    const [data, setdata] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${Currency}.json`)
        .then((res) => res.json())
        .then((res) => setdata(res.Currency))
        console.log(data);

    },[Currency])
    return data
}


export default useCurrency;