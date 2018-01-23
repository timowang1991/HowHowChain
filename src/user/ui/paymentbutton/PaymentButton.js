import React from 'react'

const PaymentButton = ({ onPaymentClick }) => {
  return(
    
      <button onClick={(event) => onPaymentClick(event)}>Pay with Ether </button>
  )
}

export default PaymentButton
