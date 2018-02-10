import * as types from './actionTypes';
import fetch from 'isomorphic-fetch';

let createItemId = 0;
export const createNotesList = list => ({
    type: types.CREATE_NOTES_LIST,
    payload: {
      list
    }
});

export const createNewNote = item => ({
    type: types.CREATE_NEW_NOTE,
    payload: {
      item,
      id: createItemId++
    }
});

export const updateNotesList = (item, id )=> ({
    type: types.UPDATE_NOTES_LIST,
    payload: {
      item,
      id
    }
});

export const removeNoteFromList = id => ({
    type: types.REMOVE_NOTE_FROM_LIST,
    payload: {
      id
    }
});

export const  loadNotesList = () => {
  return dispatch => {
    fetch('http://localhost:3000/api/notes', {
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
      .then(json => dispatch(createNotesList(json)))
      .catch(err => {
        throw(err);
      });
  };
};




