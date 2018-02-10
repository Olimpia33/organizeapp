import React from 'react';
import PropTypes from 'prop-types';
import Label from '../label/index.js';
import style from './style.scss';

const Textarea = ({
    htmlId,
    label, 
    required="false",
    type="text",
    name, 
    value,
    placeholder, 
    callback,
    error,
    maxLength,
    textareaWrapper,
    children,
    disabled}) => {
    return (
        <div className={style.input}>
            <Label htmlFor={htmlId} label={label} required={required} />
            <textarea
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                label={label}
                onChange={callback}
                maxLength={maxLength}
                className={`${error && `{style.bordeError}`} ${textareaWrapper}`}
                disabled={disabled}
            />
            {children}
            {error && <div className={style.error}>{error}</div>}
        </div>
    );
};

Textarea.propTypes = {
    htmlId: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    callback:PropTypes.func.isRequired,
    maxLength:PropTypes.string,
    error: PropTypes.string,
    children:PropTypes.node,
    textareaWrapper: PropTypes.string,
    disabled: PropTypes.bool
};

export default Textarea;
