import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

export const focus = () => {
	return { type: actionTypes.FOCUS } 
};

export const blur = () => {
	return { type: actionTypes.BLUR } 
};

const changeList = (data) => {
	return { 
		type: actionTypes.CHANGE_LIST,
		data: data.get('data') 
	}
}

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then(res => {
			dispatch(changeList(fromJS(res.data)));
			console.log(res.data.data)
		}).catch(() => console.log('Oops'))

	}
}