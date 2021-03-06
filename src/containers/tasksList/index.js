import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../../components/list/index';
import globals from '../../styles/globals.scss';
import ModalContainer from '../../components/modal/index';
import ItemForm from '../../components/itemForm/index';
import EmptyList from '../../components/emptyList/index';
import Summary from '../summary/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/taskActions';
import * as modalActions from '../../actions/modalActions';
import * as progressTaskActions from '../../actions/progressTaskActions';

class TaskContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			task: '',
			errors: { title: '' },
			isDisabled: true
		};

		this.onChange = this.onChange.bind(this);
		this.addTask = this.addTask.bind(this);
		this.removeTask = this.removeTask.bind(this);
		this.toggleCompleted = this.toggleCompleted.bind(this);
		this.cleanInputAfterModalClose = this.cleanInputAfterModalClose.bind(this);
	}

	onChange(e) {
		const task = e.target.value;
		this.setState({
			task, 
			isDisabled: !task
		});
	}

	addTask (e) {
		e.preventDefault();
		if (!this.isFormValid()) {
			return;
		}
		this.props.actions.createNewTask(this.state.task);
		this.props.modals.hideModal();
		
		this.setState({
			task: ''
		});
	}

	removeTask(id) {
		this.props.actions.removeTaskFromList(id);
		this.props.progressTask.onToggleChangeDesc();
	}

	toggleCompleted(id){
		this.props.actions.toggleTodo(id);
	}

	isFormValid() {
		let formIsValid = true;
		let errors = {};

		if (this.state.task.length < 3) {
			errors.title = 'Task must be at least 3 characters.';
			formIsValid = false;
		}

		this.setState({ errors: errors });
		return formIsValid;
	}

	cleanInputAfterModalClose() {
		this.setState({
			task: '', 
			errors: { title:'' }
		});
	}

	render(){

		const { 
			errors, 
			task, 
			isDisabled 
		} = this.state;
		
		const { tasks, progressTask } = this.props;
		return (
			<div>
				{tasks.length === 0 ?
					<EmptyList
						title="No tasks yet"
						subtitle="Add new tasks"
					/>
				:
					<List
						title="Tasks"
						items={tasks}
						deleteItem={this.removeTask}
						onToggleChangeAsc={() => progressTask.onToggleChangeAsc()}
						onToggleChangeDesc={() => progressTask.onToggleChangeDesc()}
						onToggleClick={this.toggleCompleted}
						showToggle
					/>
				}
				<Summary />
				<ModalContainer
					callback={this.cleanInputAfterModalClose}
					addButton
				>
					<ItemForm
						name="item"
						callback={this.onChange}
						itemValue={task}
						addItem={this.addTask}
						errors={errors.title}
						buttonName="Add new task"
						textareaWrapper={globals.textareaWrapper}
						buttonDisabled={isDisabled}
					/>
				</ModalContainer>
			</div>
		);
	}
}

TaskContainer.propTypes = {
	actions: PropTypes.object.isRequired,
	modals: PropTypes.object.isRequired,
	tasks: PropTypes.array.isRequired,
	task: PropTypes.array.isRequired,
	progressTask: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	const { tasks } = state;
    return {
      tasks
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(taskActions, dispatch),
    modals: bindActionCreators(modalActions, dispatch),
    progressTask: bindActionCreators(progressTaskActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
