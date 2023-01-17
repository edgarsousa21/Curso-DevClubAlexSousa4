import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './globalStyle';

ReactDOM.render(
    <>
        <App /> <GlobalStyle />
    </>,
    document.getElementById('root')
);
//todos compomentes react sempre precisam estar dentro de algo. Nada pode ficar
//fora de um elemento pai!
