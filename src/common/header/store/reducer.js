import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
	hover: false,
	mouseIn: false,
	page: 1,
	pageNum: 1,
	list: []
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.FOCUS: 
			return state.set('focused', true);
		case actionTypes.BLUR: 
			return state.set('focused', false);
		case actionTypes.MOUSE_IN:
			return state.set('mouseIn', true);
		case actionTypes.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case actionTypes.CHANGE_LIST: 
			return state.merge({
				'list': action.data,
				'pageNum': action.pageNum
			})
		case actionTypes.CHANGE_PAGE:
			return state.set('page', action.page)
		case actionTypes.HOVER:
			return state.set('hover', true);
		case actionTypes.HOVEROUT:
			return state.set('hover', false);
		default: 
			return state;
	}
}