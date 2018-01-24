import React, { Component } from 'react'
import PaymentButtonContainer from '../../user/ui/paymentbutton/PaymentButtonContainer';
import ProfolioListContainer from '../../user/ui/profolioList/ProfolioListContainer';

class Payment extends Component {
    render() {
        return (
            <div className="W(100%)">
                <ul className="M(a) Ta(c)">
                    <h1>HowHowCoin Required!</h1>
                    <p>Currently, you have</p>
                    <div className="Fz(30px)">
                        <ProfolioListContainer />
                    </div>
                    <p>HHC.</p>
                    <p>At least, you need to have 10 HHC to display this content.</p>
                    <PaymentButtonContainer />
                </ul>
            </div>
        )
    }
}

export default Payment
