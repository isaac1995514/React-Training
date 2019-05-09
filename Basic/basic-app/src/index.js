import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppFun from './App.Function';
import registerServiceWorker from './registerServiceWorker';

let container = (
    <React.Fragment>
        <App/>
    </React.Fragment>  
)

ReactDOM.render(container, document.getElementById('root'));
registerServiceWorker();
