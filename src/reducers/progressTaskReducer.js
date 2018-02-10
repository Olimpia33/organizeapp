import * as types from '../actions/actionTypes';

export default function (state = {counter: 0} , action ) {
	switch(action.type) {
		case types.TASK_INCREMENT:
			return Object.assign({}, state, {
				counter: state.counter + 1
			});
		case types.TASK_DECREMENT:
			return Object.assign({}, state, {
				counter: state.counter - 1
			});
		default:
			return state;
	}
}
