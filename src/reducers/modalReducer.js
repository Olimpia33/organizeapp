import * as types from '../actions/actionTypes';

export function modal( state = {isShowing: false}, action) {
	switch(action.type) {
		case types.SHOW_MODAL:
			return Object.assign({}, state, {
				isShowing: true
			});
		case types.HIDE_MODAL:
			return Object.assign({}, state, {
				isShowing: false
			});
		default:
		return state;
	}
}
