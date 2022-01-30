import React from 'react';
import ReactDOM from 'react-dom';

// store modules
import { Provider } from 'react-redux';
import createStore from './duck/store/store'

// router modules
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from "history"

import App from './App';

const history: any = createBrowserHistory();
export const store = createStore(history);


ReactDOM.render(
  // Provider: store の情報を参照できるようにする
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
