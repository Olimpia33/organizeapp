import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const EmptyList = ({ title, subtitle, children }) => (
  <ReactCSSTransitionGroup
    transitionName={style}
    transitionAppear
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}
  >
    <div className={style.wrapper}>
      <div className={style.title}>{title}</div>
      <div className={style.subtitle}>{subtitle}</div>
      {children}
    </div>
  </ReactCSSTransitionGroup>
);

EmptyList.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	children: PropTypes.object
};

export default EmptyList;
