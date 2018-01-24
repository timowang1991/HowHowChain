import React from 'react'

const PaymentButton = ({ onPaymentClick }) => {
  return(
    <button className="W(198px) H(52px) Bdrs(17px) Bgi(buttomRed) Mb(16px) C(#fff) Fw(500) Fz(18px)" onClick={(event) => onPaymentClick(event)}>買入</button>
  )
}

export default PaymentButton
