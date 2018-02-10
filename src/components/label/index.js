import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Label = ({htmlFor, label, required}) => {
  return (
    <label className={style.label} htmlFor={htmlFor}>
        {label} {required && <span className={style.alert}>*</span>}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool
};

export default Label;
