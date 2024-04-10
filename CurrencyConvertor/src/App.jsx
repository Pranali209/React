import { useState } from 'react'
import useCurrency from './customHook/CurrencyHook';
import './App.css'
import InputBox from './Components/InputBox';

function App() {
  const [From, setFrom] = useState('usd')
  const [To, setTo] = useState('Inr')
  const [amount ,setAmount] = useState(0)
  const [convertedAmount , setConvertedAmount] = useState(0)
  const data = useCurrency(From)
  const Options = Object.keys(data)
  return (
    <>
      <div className='w-[80vh] h-[56vh] bg-white bg-opacity-15 rounded-md  border-2 shadow-2xl p-8'>
      
      <InputBox SelectedValue = {From}  amount = {amount} OnAmountChange = {(amount)=> setAmount(amount)} currOptions ={Options}
      OnSelectedValueChange = {(currency)=>setAmount(amount)}/>
     
      
    
     
      </div>
    
    </>
  )
}

export default App
