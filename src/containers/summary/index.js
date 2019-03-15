import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import ProgressBar from '../../components/progress-bar/index';
import Rating from '../../components/rating/index';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as progressTaskActions from '../../actions/progressTaskActions';
import * as taskActions from '../../actions/taskActions';

class Summary extends Component {
	constructor(props){
		super(props);
	}

	countPercent (count, item) {
		if( item === 0 || item < 0) {
			return false;
		}

		const counter = count/item * 100;
		return counter.toFixed(0);
	}

	render() {

		const { counterTask, tasks } = this.props;
		const task = tasks.length;
		const countTask = this.countPercent(counterTask, task);
	
		return (
			<div className={style.wrapper}>
				<div className={style.rating}>
					<Rating points={task} />
				</div>
				<p className={style.task}>Task rating </p>
				<ProgressBar
					width={270}
					percent={countTask}
					height={20}
					main={style.progressTask}
					fill={style.taskFill}
					text={countTask +'%'}
				/>
			</div>
		);
	}
}

Summary.propTypes = {
  progress: PropTypes.object.isRequired,
  counter: PropTypes.number.isRequired,
  counterTask: PropTypes.number.isRequired,
  tasks: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
	const { tasks } = state;
    const { progressTask: { counter: counterTask } } = state;
    return {
      counterTask,
      tasks
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    progressTask: bindActionCreators(progressTaskActions, dispatch),
    taskActions: bindActionCreators(taskActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
