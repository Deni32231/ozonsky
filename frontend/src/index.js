import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
    transition: all 0.1s linear;
    list-style: none;
}
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Global/>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);