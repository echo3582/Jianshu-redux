import * as actionTypes from './actionTypes';
import { Map } from 'immutable';

const defaultState = Map({
	focused: false
});

export default (state = defaultState, action) => {
	if (action.type === actionTypes.FOCUS) {
		return state.set('focused', true)
	}
	if (action.type === actionTypes.BLUR) {
		return state.set('focused', false)
	}
	return state;
}