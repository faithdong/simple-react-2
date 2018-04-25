import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter , Route,Link,NavLink,Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter history={HashRouter} >
        <Switch>
            <Route paht='/' component={App}/>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);
registerServiceWorker();
