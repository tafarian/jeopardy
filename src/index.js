import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStor } from 'redux';
import RootReducer from './reducres';
import App from './components/App';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);
