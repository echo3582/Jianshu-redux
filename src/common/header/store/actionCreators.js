import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (arr) => {
	return { 
		type: actionTypes.CHANGE_LIST,
		data: fromJS(arr),
		pageNum: Math.ceil(arr.length/10) 
	}
}

export const focus = () => {
	return { type: actionTypes.FOCUS } 
};

export const blur = () => {
	return { type: actionTypes.BLUR } 
};

export const mouseIn = () => {
	return { type: actionTypes.MOUSE_IN }
}

export const mouseLeave = () => {
	return { type: actionTypes.MOUSE_LEAVE }
}

export const changePage = (page) => {
	return { 
		type: actionTypes.CHANGE_PAGE,
		page: page 
	}
}

export const hover = () => {
	return { type: actionTypes.HOVER }
}

export const hoverOut = () => {
	return { type: actionTypes.HOVEROUT }
}

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then(res => {
			const data = res.data;
			dispatch(changeList(data.data));
		}).catch(() => console.log('Oops'))

	}
}