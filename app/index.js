import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Product from './components/products/Product';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const render = (RootApp = App) => {
    ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Router history={hashHistory}>
                <Route path="/" component={RootApp}>
                    <IndexRoute component={Home} />
                    <Route path="/login" component={Login}></Route>
                    <Route path="/products" component={Product}></Route>
                </Route>
            </Router>
        </Provider>
        , document.getElementById("app")
    );
}

render();

if (module.hot) {
    module.hot.eccept('./app/index.js', () => {
        render(require('./components/App').default);
    });
}