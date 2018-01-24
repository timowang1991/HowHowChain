import React, { Component } from 'react'
import PaymentButtonContainer from '../../user/ui/paymentbutton/PaymentButtonContainer';
import ProfolioListContainer from '../../user/ui/profolioList/ProfolioListContainer';

class Payment extends Component {
    render() {
        return (
            <div className="W(100%)">
                <ul className="M(a)">
                    <h1>HowHowCoin Required!</h1>
                    <p>Currently, you have <ProfolioListContainer /> HHC.</p>
                    <p>At least, you need to have 100 HHC to display this content.</p>
                    <PaymentButtonContainer />
                </ul>
            </div>
        )
    }
}

export default Payment
