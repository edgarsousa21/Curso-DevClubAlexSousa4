import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './globalStyle';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
    <App /> <GlobalStyle />
</>);

//todos compomentes react sempre precisam estar dentro de algo. Nada pode ficar
//fora de um elemento pai!