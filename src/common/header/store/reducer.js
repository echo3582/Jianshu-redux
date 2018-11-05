const defaultState = {
	focused: false
};

export default (state = defaultState, action) => {
	if (action.type === 'focus') {
		return { focused: true }
	}
	if (action.type === 'blur') {
		return { focused: false }
	}
	return state;
}