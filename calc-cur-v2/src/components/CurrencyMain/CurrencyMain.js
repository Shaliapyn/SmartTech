import React from 'react'
import './CurrencyMain.css'
import CurrencyLeft from '../CurrencyLeft/CurrencyLeft'
import CurrencyRight from '../CurrencyRight/CurrencyRight'

const CurrencyMain = ({currency, setInput, setLeftCurrency, setRightCurrency, leftCurrency, rightCurrency,
  toAmount, fromAmount, handleFromAmountChange, handlToAmountChange
}) => {
  return (
    <div className='currency'>
        <CurrencyLeft 
        onChangeAmount={handleFromAmountChange}
        setLeftCurrency={setLeftCurrency} 
        setInput={setInput} 
        currency={currency}
        selectedLeftCurrency={leftCurrency}
        onChangeCurrency={(e) => setLeftCurrency(e.target.value)}
        amount={fromAmount}
       />

        <CurrencyRight 
        setRightCurrency={setRightCurrency} 
        setInput={setInput} 
        currency={currency}
        selectedRightCurrency={rightCurrency}
        onChangeCurrency={(e) => setRightCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount={handlToAmountChange}
        />
    </div>
  )
}

export default CurrencyMain