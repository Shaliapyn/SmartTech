import React from 'react'
import './CurrencyLeft.css'

const CurrencyLeft = ({currency, setInput, setLeftCurrency, selectedLeftCurrency, onChangeCurrency, amount, onChangeAmount}) => {
  let now = new Date().toLocaleDateString();

  return (
    <div  className='left'>
      <p>Ви віддаєте</p>
      <div>
        <input onChange={onChangeAmount} value={amount} ></input>
        <select value={selectedLeftCurrency} onChange={onChangeCurrency}>
        {currency.map(option => (
            <option onChange={(e) => setLeftCurrency(e.target.value)} value={option}>{option}</option>
          ))}
        </select>
        <p>Курс обміну актальний на {now}</p>
      </div>

    </div>
  )
}

export default CurrencyLeft