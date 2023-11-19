import {combineReducers} from 'redux';
import { cartReducer } from './Reducer';
import {favoritiesReducer} from './Reducer1';
import {filterReducer} from './Filterreducer'

const rootred = combineReducers ({
    cartReducer,
    favoritiesReducer,
    filterReducer,
});

export default rootred;