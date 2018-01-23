import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";
import kolList from '../../config/kollisting';
import kolPortfolioChart from '../../config/kolPortfolioChart';

class KolPortfolio extends Component {
	constructor(props) {
        super(props);
        this.generateChartData = this.generateChartData.bind(this);
        this.state = {
	      chartData: this.generateChartData(),
	      timer: null
	    };
    }
	
	generateChartData() {
	  let firstDate = new Date();
	  let output = [];
	  firstDate.setHours( 0, 0, 0, 0 );
	  firstDate.setDate( firstDate.getDate() - 2000 );

	  for ( let i = 0; i < 2000; i++ ) {
	    let newDate = new Date( firstDate );

	    newDate.setDate( newDate.getDate() + i );

	    let open = Math.round( Math.random() * ( 30 ) + 100 );
	    let close = open + Math.round( Math.random() * ( 15 ) - Math.random() * 10 );

	    let low;
	    if ( open < close ) {
	      low = open - Math.round( Math.random() * 5 );
	    } else {
	      low = close - Math.round( Math.random() * 5 );
	    }

	    let high;
	    if ( open < close ) {
	      high = close + Math.round( Math.random() * 5 );
	    } else {
	      high = open + Math.round( Math.random() * 5 );
	    }

	    let volume = Math.round( Math.random() * ( 1000 + i ) ) + 100 + i;


	    output[ i ] = ( {
	      "date": newDate,
	      "open": open,
	      "close": close,
	      "high": high,
	      "low": low,
	      "volume": volume
	    } );
	  }

	  return output;
	}

    render() {
    	const {
            name,
            description,
            image,
            totalMovies,
            totalParticipants,
            participants
        } = kolList[0];

        let config = kolPortfolioChart;
        config.dataSets[0].dataProvider = this.state.chartData;

        return (
        	<div className="profolio">
        		<ul className="W(1028px) M(a)">
		            <li className="profolio D(f) Jc(sb) Py(20px)">
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
		                                        src={image}
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
		                        <button className="W(198px) H(52px) Bdrs(17px) Bgi(buttomRed) Mb(16px) C(#fff) Fw(500) Fz(18px)">買入</button>
		                        <button className="W(198px) H(52px) Bdrs(17px) Bgc(#fff) Bd(buttomBorder) C(#e94e61) Fw(500) Fz(18px)">賣出</button>
		                    </div>
		                </div>
		           	</li>
	           	</ul>
				<hr/>
				
				<div className="tableStatus W(1028px) M(a)">
		          <table className="W(80%) Bdstart(greySolid) Bdt(greySolid) M(a)">
		          <thead>
		              <tr>
		                <td className="r0">売気配値</td>
		                <td className="r1">売VA数</td>
		                <td className="r2">価格</td>
		                <td className="r3">買VA数</td>
		                <td className="r4">買気配値</td>
		              </tr>
		          </thead>
		          <tbody>
		            <tr className="sale">
		              <td className="r0">
		                <p className="bar W(100%) D(tb) Mstart(a) Bg(#e94e61) H(16px)"></p>
		              </td>
		              <td className="r1">10</td>
		              <th className="r2 C(#e94e61)"><a href="https://valu.is/users/order/buy/kahua?default_price=0.012000">0.012000</a></th>
		              <td className="r3"></td>
		              <td className="r4"></td>
		            </tr>
		            <tr className="sale">
		              <td className="r0">
		                <p className="bar W(10%) D(tb) Mstart(a) Bg(#e94e61) H(16px)"></p>
		              </td>
		              <td className="r1">1</td>
		              <th className="r2 C(#e94e61)"><a href="https://valu.is/users/order/buy/kahua?default_price=0.006000">0.006000</a></th>
		              <td className="r3"></td>
		              <td className="r4"></td>
		            </tr>
		            <tr className="sale">
		              <td className="r0">
		                <p className="bar W(10%) D(tb) Mstart(a) Bg(#e94e61) H(16px)"></p>
		              </td>
		              <td className="r1">1</td>
		              <th className="r2 C(#e94e61)"><a href="https://valu.is/users/order/buy/kahua?default_price=0.001500">0.001500</a></th>
		              <td className="r3"></td>
		              <td className="r4"></td>
		            </tr>
		          </tbody>
		          </table>
		        </div>
		        <div className="stock W(80%) M(a)">
		          <AmCharts.React style={{ width: "100%", height: "450px" }} options={config} />
		       	</div>

        	</div>
        );
    }
}

export default KolPortfolio;