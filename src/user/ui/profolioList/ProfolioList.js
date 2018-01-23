import React, { Component } from 'react'

class ProfolioList extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   amount: this.props.amount
    // }
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.checkBalance()
    }, 500);
    
  }


  render() {
    return (
      <div>{this.props.amount}</div>
    )
  }

}

// const ProfolioList = ({ checkBalance }) => {
//   return(
    
//     <button onClick={(event) => checkBalance(event)}>Check balance </button>
//   )
// }

export default ProfolioList
