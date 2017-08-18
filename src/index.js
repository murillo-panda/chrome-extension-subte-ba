import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import reducers from './redux/reducers';
import './index.css';

const createStoreWidthMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
<Provider store={createStoreWidthMiddleware(reducers)}>
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} />
    </Switch>
  </BrowserRouter>
</Provider>, document.getElementById('root')
);
