import React, { Component } from 'react';
import KolPortfolioListItem from './KolPortfolioListItem';
import kolPortfolio from '../../config/kolPortfolio';

class KolPortfolio extends Component {
    render() {
        return (
            <div className="Mstart(80px) Mt(40px) W(800px)">
                <div className="Fz(20px) C(#9b9b9b)">錢包估值</div>
                <div className="Fz(36px) Mt(8px)">{kolPortfolio.walletValue} {kolPortfolio.walletCurrency}</div>
                <div className="Mt(16px)">
                {kolPortfolio.kols.map((item, idx) =>
                    <KolPortfolioListItem key={`KolPortfolioListItem-${idx}`} {...item} />
                )}
                </div>
            </div>
        );
    }
}

export default KolPortfolio; 