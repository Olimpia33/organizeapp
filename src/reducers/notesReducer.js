import * as types from '../actions/actionTypes';

export default function notesReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_NOTES_LIST:{
            const { payload: { list: list } } = action;
            return list;
        }
    case types.CREATE_NEW_NOTE: {
        const { payload: { item, id } } = action;
            return [
                ...state,
                Object.assign({},{ id }, item)
        ];
      }
    case types.UPDATE_NOTES_LIST: {
        const { payload: { item} } = action;
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

    case types.REMOVE_NOTE_FROM_LIST: {
        const { payload: { id: id } } = action;
            return [
                ...state.filter(item => item.id !== id)
            ];
    }
    default:
      return state;
    }
}
