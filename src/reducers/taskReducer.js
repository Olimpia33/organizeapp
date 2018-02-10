import * as types from '../actions/actionTypes';

export default function taskReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_TASKS_LIST:{
            const { payload: { list: list } } = action;
            return list;
        }
        case types.CREATE_NEW_TASK: {
            const { payload: { item,id,completed } } = action;
            return [
                ...state,
                Object.assign({},{id}, item, {completed})
            ];
        }
        case types.UPDATE_TASKS_LIST: {
            const { payload: { item } } = action;
            let nextState = [...state];
            const index = nextState.findIndex(({ id }) => item.id === id);
                if (index >= 0) {
                    nextState = [
                        ...state.slice(0, index),
                        item,
                    ...state.slice(index + 1)
                    ];
                }
                return nextState;
        }
        case types.REMOVE_TASK_FROM_LIST: {
            const { payload: { id } } = action;
                return [
                ...state.filter(item => item.id !== id)
            ];
        }
        case types.TOGGLE_TASK:
            return state.map(todo => {
                if (todo.id !== action.payload.id) {
                    return todo;
                }
                return Object.assign({},
                    todo, {completed: !todo.completed});
                });

        default:
            return state;
  }
}
