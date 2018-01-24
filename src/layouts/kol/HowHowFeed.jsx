import React, { Component } from 'react';


class HowHowFeed extends Component {
    render() {
        return (
            <div className="W(100%)">
                <div className="M(20px)">
                    <div className="Ta(c) C(white)" style={{
                        background: 'url(https://cdn.pixabay.com/photo/2018/01/16/23/37/sunset-3087145_1280.jpg) no-repeat',
                        backgroundSize: "100%"
                    }}>
                        <div className="W(100%) H(100%) Ta(c) D(b)">
                            <img className="W(144px) H(144px) Bdrs(50%)" src="https://s3-us-west-1.amazonaws.com/acttools/howhowcoin/20180123/howhow.jpg?q=57786" alt="" />
                        </div>
                        <p className="Fz(32px)">HowFun</p>
                        <p className="Fz(18px)">嗨大家安安! 我是HowHow 我喜歡拍影片記錄自己的生活</p>

                        <button onClick={() => window.location = '/kol/payment'} className="W(198px) H(52px) Bdrs(17px) Bgi(buttomRed) Mb(16px) C(#fff) Fw(500) Fz(18px)">成為贊助者</button>

                    </div>
                </div>
            </div>
        );
    }
}

export default HowHowFeed;