import React, { Component } from 'react';
import KolPortfolioListItem from './KolPortfolioListItem';
import kolPortfolio from '../../config/kolPortfolio';
import ProfolioListContainer from '../../user/ui/profolioList/ProfolioListContainer';
import { connect } from 'react-redux'
import { getBalance } from '../../user/ui/profolioList/ProfolioListActions'

class KolPortfolio extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.checkBalance()
        }, 500);
    }

    render() {

        var data = {
            name: 'HowFun',
            image: 'https://s3-us-west-1.amazonaws.com/acttools/howhowcoin/20180123/howhow.jpg?q=57786',
            kolCurrencyValue: 100,
            kolCurrencyName: 'HFC',
            kolCurrencyToETH: this.props.amount * 0.01
        };

        return (
            <div className="Mstart(80px) Mt(40px) W(800px)">
                <div className="Fz(20px) C(#9b9b9b)">錢包估值</div>
                <div className="Fz(36px) Mt(8px)">{kolPortfolio.walletValue} {kolPortfolio.walletCurrency}</div>
                <div className="Mt(16px)">
            
                

                    <div className="Py(24px) Bdbs(s) Bdbw(1px) Bdbc(#d8d8d8)">
                        <img className="Fl(start) W(72px) H(72px) Mend(24px) Bdrs(50%)" src={data.image} alt="" />
                        <div className="Fl(start) Fz(24px) Fw(500) C(#26282a) Lh(72px)">
                            {data.name}
                        </div>
                        <div className="Fl(end) Mt(8px) Ta(end)">
                            <div className="Fz(24px) C(#26282a)">
                                <div className="D(ib)">
                                    <ProfolioListContainer />
                                </div>
                                <div className="D(ib) Mstart(16px)">{data.kolCurrencyName}</div>
                            </div>
                            <div className="C(#9b9b9b) Mt(8px)">
                                約等於 {data.kolCurrencyToETH} ETH
                    </div>
                        </div>
                        <div className="Cl(b)" />
                    </div>

                {kolPortfolio.kols.map((item, idx) =>
                    <KolPortfolioListItem key={`KolPortfolioListItem-${idx}`} {...item} />
                )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        amount: (state.user.data ? state.user.data.amount : 0)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkBalance: () => {
            // event.preventDefault();
            dispatch(getBalance())
        }
    }
}

const KolPortfolioContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(KolPortfolio)

export default KolPortfolioContainer; 