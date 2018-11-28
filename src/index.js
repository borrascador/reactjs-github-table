import regeneratorRuntime from 'regenerator-runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import rootSaga from './saga';
import App from './components/App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  {
    name: 'borrascador',
    repos: null
  },
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
