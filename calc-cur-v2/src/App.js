
import { useEffect, useState } from 'react';
import './App.css';
import CurrencyMain from './components/CurrencyMain/CurrencyMain';

function App() {
  const [currency, setCurrency] = useState([])
  const [leftCurrency, setLeftCurrency] = useState()
  const [rightCurrency, setRightCurrency] = useState()
  const [input, setInput] = useState(0)
  const [amount, setAmount] = useState(1)
  const [exchangeRate, setExchangeRate] = useState()
  const [amountInLeftCurrency, setAmountInLeftCurrency] = useState(true)
  console.log(exchangeRate)

  let toAmount, fromAmount; 
  if(amountInLeftCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }
  function handleFromAmountChange(e){
    setAmount(e.target.value)
    setAmountInLeftCurrency(true)
  }
  function handlToAmountChange(e){
    setAmount(e.target.value)
    setAmountInLeftCurrency(false)
  }

  let apiUrl = 'https://api.exchangerate.host/latest';
useEffect(()=>{
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      const firstCurrency = Object.keys(data.rates)[0]
      setCurrency([data.base, ...Object.keys(data.rates)])
      // console.log(currency)
      setLeftCurrency(data.base)
      setRightCurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])

    })
}, [])
useEffect(()=>{
  if (leftCurrency != null && rightCurrency != null){
    fetch(`${apiUrl}?base=${leftCurrency}&symbols=${rightCurrency}`)
      .then(res => res.json())
      .then(data => setExchangeRate(data.rates[rightCurrency]))
  }
}, [leftCurrency, rightCurrency])

  return (
    <div className='main-app'>
      <CurrencyMain 
      setLeftCurrency={setLeftCurrency}
      setRightCurrency={setRightCurrency} 
      setInput={setInput} 
      currency={currency}
      leftCurrency={leftCurrency}
      rightCurrency={rightCurrency}
      fromAmount={fromAmount}
      toAmount={toAmount}
      handleFromAmountChange={handleFromAmountChange}
      handlToAmountChange={handlToAmountChange}
      />
    </div>
  );
}

export default App;
