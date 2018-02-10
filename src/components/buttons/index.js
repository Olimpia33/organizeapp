import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Button = ({value, onClick, className, disabled}) => (
    <button
        type = "submit"
        onClick={onClick}
        className={className}
        disabled={disabled}
    >
         {value}
    </button>
);

Button.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool
};

export default Button;
