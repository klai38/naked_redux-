import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App.jsx';
import { createStore } from 'redux';


ReactDOM.render(< App store={createStore(App)} />,
 document.getElementById("root"));



