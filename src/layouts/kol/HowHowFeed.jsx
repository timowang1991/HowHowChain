import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getBalance } from '../../user/ui/profolioList/ProfolioListActions'

class HowHowFeed extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.checkBalance()
        }, 500);
    }

    render() {

        return (
            <div className="Frame W(100%)">
                <div className="TitleBar W(100%)">
                    <div className="M(20px)">
                        <div className="Ta(c) C(white) Pt(50px)" style={{
                            background: 'url(https://cdn.pixabay.com/photo/2018/01/16/23/37/sunset-3087145_1280.jpg) no-repeat',
                            backgroundSize: "100%"
                        }}>
                            <div className="W(100%) H(100%) Ta(c) D(b)">
                                <img className="W(144px) H(144px) Bdrs(50%)" src="https://s3-us-west-1.amazonaws.com/acttools/howhowcoin/20180123/howhow.jpg?q=57786" alt="" />
                            </div>
                            <p className="Fz(32px)">HowFun</p>
                            <p className="Fz(18px)">嗨大家安安! 我是HowHow 我喜歡拍影片記錄自己的生活</p>

                            <button onClick={() => window.location = '/kol/transaction'} className="W(198px) H(52px) Bdrs(17px) Bgi(buttomRed) Mb(16px) C(#fff) Fw(500) Fz(18px)">成為贊助者</button>
                        </div>
                    </div>
                </div>
                
                <div className="Sponsers W(60%) M(a) Mt(16px) Mb(32px)">
                    <div>贊助者(3,446)</div>
                    <div className="D(f) My(20px)" >
                        <img className="H(64px) W(64px) Bdrs(24px) Mend(10px)" src="https://randomuser.me/api/portraits/men/64.jpg" alt=""/>
                        <img className="H(64px) W(64px) Bdrs(24px) Mend(10px)" src="https://randomuser.me/api/portraits/men/74.jpg" alt=""/>
                        <img className="H(64px) W(64px) Bdrs(24px) Mend(10px)" src="https://randomuser.me/api/portraits/men/48.jpg" alt=""/>
                        <img className="H(64px) W(64px) Bdrs(24px) Mend(10px)" src="https://randomuser.me/api/portraits/men/37.jpg" alt=""/>
                        <img className="H(64px) W(64px) Bdrs(24px) Mend(10px)" src="https://randomuser.me/api/portraits/men/22.jpg" alt=""/>
                        <img className="H(64px) W(64px) Bdrs(24px) Mend(10px)" src="https://randomuser.me/api/portraits/men/33.jpg" alt=""/>
                        <div className="H(64px) W(64px) Bgc(#bb1e32) Ta(c) Bdrs(24px) C(white)"><text className="Lh(64px)">More</text></div>
                    </div>
                </div>

                <div className="UploadVideo W(60%) M(a)"></div>
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

const HowHowFeedContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HowHowFeed)

export default HowHowFeedContainer;