import {createStore,applyMiddlleware} from 'redux';

import reducer from '../reducer'

let store = createStore(reducer, applyMiddlleware())

export default store;