// import AuthenticationContract from '../../../../build/contracts/Authentication.json'
// import { browserHistory } from 'react-router'
import store from '../../../store'

// const contract = require('truffle-contract')

export function makePayment() {

  // // Double-check web3's status.
  // if (typeof web3 !== 'undefined') {

  //   return function (dispatch) {
  //     // Using truffle-contract we create the authentication object.
  //     const authentication = contract(AuthenticationContract)
  //     authentication.setProvider(web3.currentProvider)

  //     // Declaring this for later so we can chain functions on Authentication.
  //     var authenticationInstance

  //     // Get current ethereum wallet.
  //     web3.eth.getCoinbase((error, coinbase) => {
  //       // Log errors, if any.
  //       if (error) {
  //         console.error(error);
  //       }

  //       authentication.deployed().then(function (instance) {
  //         authenticationInstance = instance

  //         // Attempt to login user.
  //         authenticationInstance.login({ from: coinbase })
  //           .then(function (result) {
  //             // If no error, login user.
  //             var userName = web3.toUtf8(result)

  //             dispatch(userLoggedIn({ "name": userName }))

  //             // Used a manual redirect here as opposed to a wrapper.
  //             // This way, once logged in a user can still access the home page.
  //             var currentLocation = browserHistory.getCurrentLocation()

  //             if ('redirect' in currentLocation.query) {
  //               return browserHistory.push(decodeURIComponent(currentLocation.query.redirect))
  //             }

  //             return browserHistory.push('/dashboard')
  //           })
  //           .catch(function (result) {
  //             // If error, go to signup page.
  //             console.error('Wallet ' + coinbase + ' does not have an account!')

  //             return browserHistory.push('/signup')
  //           })
  //       })
  //     })
  //   }
  // } else {
  //   console.error('Web3 is not initialized.');
  // }
    let web3 = store.getState().web3.web3Instance
    console.log(web3);

    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {

        return function (dispatch) {
            // Get current ethereum wallet.
            web3.eth.getCoinbase((error, coinbase) => {
                // Log errors, if any.
                if (error) {
                    console.error(error);
                }

              console.log(coinbase);

                var transactionObject = {
                    from: coinbase,
                    // contract address to pay
                    to: "0x0d0f30012de0dbdcbc13770903d63005bb082489",
                    value: web3.toWei(0.01, "ether")
                }

                web3.eth.sendTransaction(transactionObject, (error)=>{
                  console.log(error);
                });
            })
        }
    } else {
        console.error('Web3 is not initialized.');
    }
}
