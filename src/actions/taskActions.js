import * as types from './actionTypes';
import fetch from 'isomorphic-fetch';

let createItemId = 0;
export const createTasksList = list => ({
  type: types.CREATE_TASKS_LIST,
  payload: {
    list,
    completed: false
  }
});

export const createNewTask = item => ({
  type: types.CREATE_NEW_TASK,
  payload: {
    item,
    id: createItemId++,
    completed: false
  }
});

export const updateTasksList = item => ({
  type: types.UPDATE_TASKS_LIST,
  payload: {
    item
  }
});

export const removeTaskFromList = id => ({
  type: types.REMOVE_TASK_FROM_LIST,
  payload: {
    id
  }
});

export const toggleTodo = id => {
  return {
    type: types.TOGGLE_TASK,
    payload: {
      id
    }
 };
};

export const  loadTasksList = () => {
  return dispatch => {
    fetch('http://localhost:3000/api/tasks', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if(response.status !== 200) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => dispatch(createTasksList(json)))
      .catch(err => {
        throw(err);
    });
  };
};
