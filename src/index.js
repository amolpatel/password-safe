import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/index'
import './styles/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


// ROUTING
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


// MIDDLEWARE
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'


// CONTAINERS
import Loading from './containers/loading';
import Authenticated from './containers/authenticated';
import CreateAccount from './containers/createAccount';
import Login from './containers/homePage';
import AccountPage from './containers/accountPage';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Loading>
          <Switch>
            <Route path="/createAccount" component={CreateAccount} />
            <Route path="/login" component={Login} />
            <Authenticated>
              <Route exact path="/" component={AccountPage} />
            </Authenticated>
          </Switch>
        </Loading>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();