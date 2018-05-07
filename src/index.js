import React from 'react';
import ReactDom from 'react-dom'
 import { Provider } from 'react-redux';
 import thunk from 'redux-thunk';
 import { createStore ,applyMiddleware } from 'redux';
 import todoApp from './reducers/addtodoredux/TodoApp';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';


// redux 注入操作
const middleware = [thunk];
const store = createStore(todoApp, applyMiddleware(...middleware));
//let store = createStore(todoApp);

ReactDom.render(

  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
