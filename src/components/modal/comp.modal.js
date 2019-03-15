import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Modal = ({isOpen, close, children }) => (
  <div>
    {isOpen &&
      <ReactCSSTransitionGroup
          transitionName={style}
          transitionAppear
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
      >
        <div className={style.modal} key={children}>
          <div className={style.content}>
            <span className={style.close} onClick={close}></span>
            <span>{children}</span>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    }
  </div>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
};

export default Modal;
