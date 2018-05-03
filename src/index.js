import React from 'react';
import ReactDom from 'react-dom'
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './reducers';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';

//const store = createStore(rootReducer);
//let store = createStore(todoApp);

ReactDom.render(

  <HashRouter>
      <App />
    </HashRouter>,
  document.getElementById('root')


);
registerServiceWorker();
