import React from 'react'
import './CurrencyRight.css'

const CurrencyRight = ({currency}) => {

  return (
    <div  className='right'>
      <p>Ви отримуєте</p>
      <div>
        <input></input>
        <select>
          {currency.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <p>Комісія:</p>
      </div>
    </div>
  )
}

export default CurrencyRight