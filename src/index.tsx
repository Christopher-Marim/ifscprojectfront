import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './pages/Home/App';
import Global from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <Global/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
