import React, { Component } from 'react';

class KolListItem extends Component {
    render() {
        const {
            name,
            description,
            image,
            totalMovies,
            ethValue,
            totalParticipants,
            participants
        } = this.props;
        return (
            <li className="D(f) Jc(sb) Py(20px)">
                <div className="D(f)">
                    <div className="W(144px) H(144px) Mend(64px)">
                        <img className="W(100%) H(100%) Bdrs(50%)" src={image} alt="" />
                    </div>
                    <div className="W(623px)">
                        <div className="Fz(24px) Fw(500) C(#26282a)">{name}</div>
                        <div className="Fz(18px) C(#9b9b9b) Mt(8px)">
                            參與人數：{totalParticipants}・{totalMovies}部影片
                        </div>
                        <div className="Fz(18px) C(#9b9b9b) Mt(8px)">
                            {description}    
                        </div>
                        <div className="Mt(13px)">
                            {participants.map((item) =>
                                <div className="W(32px) H(32px) Fl(start)">
                                    <img
                                        className="W(100%) H(100%) Bdrs(50%)"
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                            )}
                            <div className="Cl(start)" />
                        </div>
                    </div>
                </div>
                <div className="Lh(43px) D(f) Jc(c) Fld(c)">
                    <div className="Fz(36px) Fw(500) C(#26282a)">
                        <div className="D(ib)">{ethValue}</div>
                        <div className="D(ib) Mstart(4px) Fz(24px) C(#cacaca)">ETH</div>
                    </div>
                </div>
            </li>
        );
    }
}

export default KolListItem;
