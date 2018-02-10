import {combineReducers} from 'redux';
import tasks from './taskReducer';
import notes from './notesReducer';
import {modal, item} from './modalReducer';
import progressTask from './progressTaskReducer';

const rootReducer = combineReducers({
	tasks,
	notes,
	modal,
	item,
	progressTask
});

export default rootReducer;
