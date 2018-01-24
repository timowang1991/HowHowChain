import { connect } from 'react-redux'
import ProfolioList from './ProfolioList'
import { getBalance } from './ProfolioListActions'

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

const PaymentButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfolioList)

export default PaymentButtonContainer
