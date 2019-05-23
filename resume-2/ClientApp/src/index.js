import './index.css';
import './2cols.css';
import './3cols.css';
import './4cols.css';
import './5cols.css';
import './6cols.css';
import './7cols.css';
import './8cols.css';
import './9cols.css';
import './10cols.css';
import './11cols.css';
import './12cols.css';
import './col.css';
import './html5reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);

registerServiceWorker();
