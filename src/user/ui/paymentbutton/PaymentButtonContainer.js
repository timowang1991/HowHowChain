import { connect } from 'react-redux'
import PaymentButton from './PaymentButton'
import { makePayment } from './PaymentButtonActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPaymentClick: (event) => {
      event.preventDefault();

      dispatch(makePayment())
    }
  }
}

const PaymentButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentButton)

export default PaymentButtonContainer
