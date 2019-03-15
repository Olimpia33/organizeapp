import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import Button from '../buttons/index.js';
import ToggleButton from '../toggle-button/index';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const List = ({
	title,
	items,
	deleteItem,
	onToggleChangeAsc,
	onToggleChangeDesc,
	onToggleClick,
	showToggle,
	forwardButton
}) => (
		<div className={style.wrapper}>
			<p className={style.title}>{title}</p>
			<ul className={style.list}>
				<ReactCSSTransitionGroup
					transitionName={style}
					transitionAppear
					transitionAppearTimeout={500}
					transitionEnterTimeout={500}
					transitionLeaveTimeout={1200}
				>
					{items.map(({ id,item, completed }) =>
						<li key={id} className={style.items}>
							<div className={style.item}>{item}</div>
							<div className={style.children}>
								{showToggle &&
									<ToggleButton
										onChangeAsc={onToggleChangeAsc}
										onChangeDesc={onToggleChangeDesc}
										completed={completed}
										onToggleClick={() => onToggleClick(id)}
									/>
								}
								{forwardButton &&
									<Link to={"notes"+id}>
										<Button
										value=">>"
										className={style.showMore}
										/>
									</Link>
								}
							</div>
							<Button
								value="-"
								className={style.listItemButton}
								onClick={() => deleteItem(id)}
							/>
						</li>
					)}
				</ReactCSSTransitionGroup>
			</ul>
    </div>
);

List.propTypes = {
	title: PropTypes.string,
	items: PropTypes.array.isRequired,
	children: PropTypes.object,
	deleteItem: PropTypes.func,
	onToggleChangeAsc: PropTypes.func,
	onToggleChangeDesc: PropTypes.func,
	onToggleClick: PropTypes.func,
	showToggle: PropTypes.bool,
	forwardButton: PropTypes.bool
};

export default List;
