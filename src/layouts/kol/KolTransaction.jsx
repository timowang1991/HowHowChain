import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";
import kolList from '../../config/kollisting';
import kolTransacChart from '../../config/kolTransacChart';
import PaymentButtonContainer from '../../user/ui/paymentbutton/PaymentButtonContainer';
import ProfolioListContainer from '../../user/ui/profolioList/ProfolioListContainer';

class KolPortfolio extends Component {
	constructor(props) {
        super(props);
        this.generateChartData = this.generateChartData.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = {
	      chartData: this.generateChartData(),
	      timer: null
	    };
    }
	
	handleButtonClick() {
		window.location = '/kol/payment';
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
		
		let [config, tableData] =  kolTransacChart;
        config.dataSets[0].dataProvider = this.state.chartData;



        return (
        	<div className="W(1028px)">
        		<ul className="W(100%) M(a)">
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
														<PaymentButtonContainer/>
		                        <button 
		                        	className="W(198px) H(52px) Bdrs(17px) Bgc(#fff) Bd(buttomBorder) C(#e94e61) Fw(500) Fz(18px)"
		                        	onClick={this.handleButtonClick}>
		                        	賣出
		                        </button>
		                    </div>
												<div className="D(ib) Ta(c)">現在您有 <ProfolioListContainer /> HHC.</div>
												
		                </div>
		           	</li>
	           	</ul>
				<hr/>
				
				<div className="tableStatus W(80%) H(300px) M(a)">
		          	<table className="W(40%) Bdstart(greySolid) Bdt(greySolid) M(a) D(ib) Fl(start)">
			          	<thead>
			              	<tr className="Lh(2)">
				                <td className="W(90%)">買量</td>
				                <td className="r1">買價</td>
			              	</tr>
			          	</thead>
			          	<tbody>
							{tableData.buy.map((item) => 
								<tr className="Lh(1.5)">
					              <td className="r0">
					                <p className={`bar W(${item.buyAmount}%) D(tb) Mstart(a) Bg(#e94e61) H(16px)`}></p>
					              </td>
					              <td className="r1">{item.buyPrice}</td>
					            </tr>
							)}
				        </tbody>
			        </table>
					<table className="W(40%) Bdstart(greySolid) Bdt(greySolid) M(a) D(ib) Fl(end)">
			          	<thead>
			              	<tr className="Lh(2)">
				                <td className="r1">賣價</td>
				                <td className="W(90%)">賣量</td>
			              	</tr>
			          	</thead>
			          	<tbody>
							{tableData.sold.map((item) => 
								<tr className="Lh(1.5)">
					              <td className="r1">{item.soldPrice}</td>
					              <td className="r0">
					                <p className={`bar W(${item.soldAmount}%) D(tb) Mend(a) Bg(#468d46) H(16px)`}></p>
					              </td>
					            </tr>
							)}
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