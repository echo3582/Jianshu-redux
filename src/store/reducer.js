import { combineReducers } from 'redux';
import headerReducer from '../common/header/store';

const reducer = combineReducers ({
	header: headerReducer
});

export default reducer
