
import { useEffect, useState } from 'react';
import './App.css';
import CurrencyMain from './components/CurrencyMain/CurrencyMain';

function App() {
  const [currency, setCurrency] = useState([])
  const [leftCurrency, setLeftCurrency] = useState()
  const [rightCurrency, setRightCurrency] = useState()
  console.log(currency)
useEffect(()=>{
  fetch('https://api.exchangerate.host/latest')
    .then(res => res.json())
    .then(data => {
      setCurrency([data.base, ...Object.keys(data.rates)])
    })
}, [])


  return (
    <div className='main-app'>
      <CurrencyMain currency={currency}/>
    </div>
  );
}

export default App;
