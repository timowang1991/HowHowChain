import React, { Component } from 'react';

class KolPortfolioListItem extends Component {
    render() {
        const {
            name,
            image,
            kolCurrencyValue = 1.23,
            kolCurrencyName = 'NFC',
            kolCurrencyToETH = 2.34,
        } = this.props;

        return (
            <div className="Py(24px) Bdbs(s) Bdbw(1px) Bdbc(#d8d8d8)">
                <img className="Fl(start) W(72px) H(72px) Mend(24px) Bdrs(50%)" src={image} alt="" />
                <div className="Fl(start) Fz(24px) Fw(500) C(#26282a) Lh(72px)">
                    {name}
                </div>
                <div className="Fl(end) Mt(8px) Ta(end)">
                    <div className="Fz(24px) C(#26282a)">
                        <div className="D(ib)">{kolCurrencyValue}</div>
                        <div className="D(ib) Mstart(16px)">{kolCurrencyName}</div>
                    </div>
                    <div className="C(#9b9b9b) Mt(8px)">
                        約等於 {kolCurrencyToETH} ETH
                    </div>
                </div>
                <div className="Cl(b)" />
            </div>
        );
    }
}

export default KolPortfolioListItem;