import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import Button from '../buttons/index';
import Textarea from '../textarea/index';

const ItemForm = ({
  onSubmit,
  name,
  callback,
  itemValue,
  errors,
  buttonName,
  buttonDisabled,
  addItem,
  isEditable,
  isEdit,
  editItem,
  saveItem,
  disabled }) =>(
  <form className={style.wrapper} onSubmit={onSubmit}>
    <Textarea
      type="text"
      name={name}
      required={false}
      callback={callback}
      value={itemValue}
      error={errors}
      wrapper={style.input}
      textareaWrapper={!isEdit 
      ? style.addInput : style.editInput}
      disabled={disabled}
    />
    {!isEditable ? (
      <Button
        value={buttonName}
        onClick={addItem}
        className={buttonDisabled 
        ? style.disabled : style.addButton}
        disabled={buttonDisabled}
      /> )
    : (
     <Button
      onClick={!isEdit ? editItem : saveItem}
      className={!isEdit 
        ? style.editButton : style.saveButton}
      value={!isEdit ? "Edit" : "Save"}
      disabled={buttonDisabled}
      />
    )}
  </form>
);

ItemForm.propTypes = {
  onSubmit: PropTypes.func,
  name: PropTypes.string,
  callback: PropTypes.func.isRequired,
  itemValue: PropTypes.string,
  errors: PropTypes.string,
  buttonName: PropTypes.string,
  buttonDisabled:PropTypes.bool,
  addItem: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isEditable: PropTypes.bool,
  isEdit: PropTypes.bool,
  editItem: PropTypes.func,
  saveItem: PropTypes.func
};

export default ItemForm;
