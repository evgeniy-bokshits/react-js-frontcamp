import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { Provider } from 'react-redux';
import store from './redux/store/store';


console.log("Init App =)");
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
   );