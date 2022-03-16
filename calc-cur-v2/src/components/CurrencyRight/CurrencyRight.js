import React from 'react'
import './CurrencyRight.css'

const CurrencyRight = ({currency, setRightCurrency, selectedRightCurrency, onChangeCurrency, amount, onChangeAmount}) => {

  return (
    <div  className='right'>
      <p>Ви отримуєте</p>
      <div>
        <input type="number" value={amount} onChange={onChangeAmount}></input>
        <select value={selectedRightCurrency} onChange={onChangeCurrency}>
          {currency.map(option => (
            <option onChange={(e) => setRightCurrency(e.target.value)} value={option}>{option}</option>
          ))}
        </select>
        <p>Комісія:</p>
      </div>
    </div>
  )
}

export default CurrencyRight