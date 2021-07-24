import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';
import {App} from './components/app/app';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #e5e5e5;
  }
`;

ReactDOM.render(
    <>
      <GlobalStyle />
      <App />
    </>,
    document.querySelector(`#app`)
);
