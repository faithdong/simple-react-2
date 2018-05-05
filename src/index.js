import React from 'react';
import ReactDom from 'react-dom'
 import { Provider } from 'react-redux';
 import { createStore } from 'redux';
 import todoApp from './reducers';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';

//const store = createStore(rootReducer);
let store = createStore(todoApp);

ReactDom.render(

  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
