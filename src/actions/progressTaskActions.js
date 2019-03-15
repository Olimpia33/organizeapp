import * as types from './actionTypes';

export const onToggleChangeAsc = () => ({
  type: types.TASK_INCREMENT
});

export const  onToggleChangeDesc = () => ({
  type: types.TASK_DECREMENT
});
