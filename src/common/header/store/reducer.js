import * as actionTypes from './actionTypes';

const defaultState = {
	focused: false
};

export default (state = defaultState, action) => {
	if (action.type === actionTypes.FOCUS) {
		return { focused: true }
	}
	if (action.type === actionTypes.BLUR) {
		return { focused: false }
	}
	return state;
}