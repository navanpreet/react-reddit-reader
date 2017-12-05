import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './css/index.css';
import App from './components/App';
import rootReducer from './reducers/reducers';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { loadState, saveState } from './containers/localStorage';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
	saveState(store.getState())
});

ReactDOM.render(
  <Provider store={store}>
	  <Router>
	    <Route path="/" component={App}/>
	  </Router>
  </Provider>,
  document.getElementById('root')
);