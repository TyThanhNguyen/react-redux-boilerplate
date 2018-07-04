import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
// import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// const store = configureStore()

render(    
    // <Provider store={store}>
    <AppRouter />
    // </Provider>
    , document.getElementById('app'));
