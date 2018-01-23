import React, { Component } from 'react'

class KolMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: ['Portfolio', 'Discovery', 'KOL Listing', 'Setting']
        };
    }
    render() {
        const {
            menuList
        } = this.state;

        return (
            <div className="Pos(r) Ff(standardFf)">
                <div className="Pos(f) W(100%) H(72px) Bxsh($menuBarBoxShadow) Bgc(#fff) Z(100)">
                    <div className="Pos(a) Start(46px) T(50%) TranslateY(-50%) Fz(36px) Fw(500) C(#26282a)">網交所</div>
                    <input
                        className="Pos(a) W(509px) H(44px) Start(50%) T(50%) Translate3d(-50%,-50%,0) Fz(18px)"
                        placeholder="找內容、找網紅"
                    />
                </div>
                <div className="H(72px)" />
                <ul className="Pos(f) W(252px) H(100%) Bxz(bb) Bgc(#f2f2f2) Fz(18px) Pstart(77px) Mt(0) C(#26282a) List(n)">
                    {menuList.map((item) =>
                        <li className="Mt(44px) Lh(25px)"><a href='#' className="Td(n) C(#26282a)">{item}</a></li>)
                    }
                </ul>
                <div className="D(f)">
                    <div className="W(252px)" />    
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default KolMenu;
