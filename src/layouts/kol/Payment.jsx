import React, { Component } from 'react'
import PaymentButtonContainer from '../../user/ui/paymentbutton/PaymentButtonContainer';

class Payment extends Component {
    render() {
        return (
            <div className="W(100%)">
                <ul className="W(1028px) M(a)">
                    <h1>Payment</h1>
                    <p>Edit your account details here.</p>
                    <PaymentButtonContainer />
                </ul>
            </div>
        )
    }
}

export default Payment
