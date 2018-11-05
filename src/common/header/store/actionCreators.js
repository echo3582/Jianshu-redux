import * as actionTypes from './actionTypes';

export const focus = () => {
	return { type: actionTypes.FOCUS } 
};

export const blur = () => {
	return { type: actionTypes.BLUR } 
};