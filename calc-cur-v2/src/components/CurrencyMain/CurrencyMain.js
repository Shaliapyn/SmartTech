import React from 'react'
import './CurrencyMain.css'
import CurrencyLeft from '../CurrencyLeft/CurrencyLeft'
import CurrencyRight from '../CurrencyRight/CurrencyRight'

const CurrencyMain = ({currency}) => {
  return (
    <div className='currency'>
        <CurrencyLeft currency={currency}/>
        <CurrencyRight currency={currency}/>
    </div>
  )
}

export default CurrencyMain