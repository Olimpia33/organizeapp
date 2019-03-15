import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const ToggleButton = ({
  completed,
  onChangeAsc,
  onChangeDesc,
  onToggleClick
}) => (
  <div>
    {!completed && (
      <div className={style.wrapper} onClick={onChangeAsc}>
        <span
          className={`${style.toggleButton} ${style.toggleOff}`}
          onClick={onToggleClick}
        >
          <div></div>
        </span>
      </div>
    )}
    {completed && (
      <div className={style.wrapper} onClick={onChangeDesc}>
        <span
          className={`${style.toggleButton} ${style.toggleOn}`}
          onClick={onToggleClick}>
            <div></div>
        </span>
      </div>
      )}
  </div>
);

ToggleButton.propTypes = {
  completed: PropTypes.bool,
  onChangeAsc: PropTypes.func,
  onChangeDesc: PropTypes.func,
  onToggleClick: PropTypes.func
};

export default ToggleButton;
