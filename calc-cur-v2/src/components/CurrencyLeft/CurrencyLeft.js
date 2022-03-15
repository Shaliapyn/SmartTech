import React from 'react'
import './CurrencyLeft.css'

const CurrencyLeft = ({currency}) => {
  let now = new Date().toLocaleDateString();
  
  return (
    <div  className='left'>
      <p>Ви віддаєте</p>
      <div>
        <input></input>
        <select>
        {currency.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <p>Курс обміну актальний на {now}</p>
      </div>
      
    </div>
  )
}

export default CurrencyLeft