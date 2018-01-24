import React from 'react'

const PaymentButton = ({ onPaymentClick }) => {
  return(
    <button className="pure-button pure-button-primary" onClick={(event) => onPaymentClick(event)}>Pay with Ether</button>
  )
}

export default PaymentButton
