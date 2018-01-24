import React, { Component } from 'react'
import PaymentButtonContainer from '../../user/ui/paymentbutton/PaymentButtonContainer';
import ProfolioListContainer from '../../user/ui/profolioList/ProfolioListContainer';

class Payment extends Component {
    render() {
        return (
            <div className="W(100%)">
                <ul className="M(a) Ta(c)">
                    <h1>HowHowCoin Balance</h1>
                    <p>Currently, you have</p>
                    <div className="Fz(30px)">
                        <ProfolioListContainer />
                    </div>
                    <p>HHC.</p>
                    <PaymentButtonContainer />
                    <p />
                    <button className="W(198px) H(52px) Bdrs(17px) Bgc(#fff) Bd(buttomBorder) C(#e94e61) Fw(500) Fz(18px)">賣出</button>
                </ul>
            </div>
        )
    }
}

export default Payment
