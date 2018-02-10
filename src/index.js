import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider}  from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadTasksList} from './actions/taskActions';
import {loadNotesList} from './actions/notesActions';

const store = configureStore();
// store.dispatch(loadTasksList());
// store.dispatch(loadNotesList());

render(
  <Provider store={store}>
	<Router history={browserHistory} routes={routes} />
  </Provider>,
	document.getElementById('app')
);
