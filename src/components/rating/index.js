import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Rating = ({points, wrapper}) => (
	<div className={wrapper}>
		<div className={style.item}>{points}</div>
	</div>
);

Rating.propTypes = {
	points: PropTypes.number,
	wrapper: PropTypes.string
};

export default Rating;