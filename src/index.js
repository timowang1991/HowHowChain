import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { UserIsAuthenticated, UserIsNotAuthenticated } from './util/wrappers.js'
import getWeb3 from './util/web3/getWeb3'

// Layouts
import App from './App'
import Home from './layouts/home/Home'
import Dashboard from './layouts/dashboard/Dashboard'
import SignUp from './user/layouts/signup/SignUp'
import Profile from './user/layouts/profile/Profile'
import KolMenu from './layouts/kol/KolMenu'
import KolList from './layouts/kol/KolList';
import KolPortfolio from './layouts/kol/KolPortfolio';
<<<<<<< HEAD
import Payment from './layouts/kol/Payment';
=======
import KolTransaction from './layouts/kol/KolTransaction';
>>>>>>> update

// Redux Store
import store from './store'

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)

// Initialize web3 and set in Redux.
getWeb3
.then(results => {
  console.log('Web3 initialized!')
})
.catch(() => {
  console.log('Error in web3 initialization.')
})

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="dashboard" component={UserIsAuthenticated(Dashboard)} />
          <Route path="signup" component={UserIsNotAuthenticated(SignUp)} />
          <Route path="profile" component={UserIsAuthenticated(Profile)} />
        </Route>
        <Route path="/kol" component={KolMenu}>
          <Route path="portfolio" component={KolPortfolio} />
          <Route path="transaction" component={KolTransaction} />
          <Route path="kollisting" component={KolList} />
        <Route path="payment" component={Payment} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
