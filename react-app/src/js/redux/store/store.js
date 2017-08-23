'use strict';
import { createStore } from 'redux';
import Reducer from '../reducers/login.js';

const store = createStore(Reducer);

export default store;