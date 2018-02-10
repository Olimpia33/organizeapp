import React, { Component } from 'react';
import PropTypes from 'prop-types';
import globals from '../../styles/globals.scss';
import List from '../../components/list/index';
import Button from '../../components/buttons/index';
import ModalContainer from '../../components/modal/index';
import ItemForm from '../../components/itemForm/index';
import EmptyList from '../../components/emptyList/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as notesActions from '../../actions/notesActions';
import * as modalActions from '../../actions/modalActions';

class NotesContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			note: Object.assign({}, props.note),
			errors: {title: ''},
			isDisabled: true
		};

		this.onHandleChange = this.onHandleChange.bind(this);
		this.addNote = this.addNote.bind(this);
		this.removeNote = this.removeNote.bind(this);
		this.cleanInputAfterModalClose = this.cleanInputAfterModalClose.bind(this);
	}

	onHandleChange(e) {
		const field = e.target.name;
		const { note } = this.state;
		const value = e.target.value;
		note[field] = value;
		this.setState({
			note, 
			isDisabled: !note});
	}

	addNote (e) {
		e.preventDefault();
		if (!this.isFormValid()) {
			return;
		}
		this.props.actions.createNewNote(this.state.note);
		this.props.modals.hideModal();

		this.setState({
			note: {item: ''}
		});
	}

	removeNote(id) {
		this.props.actions.removeNoteFromList(id);
	}

	isFormValid() {
		let formIsValid = true;
		let errors = {};

		const { note: { item}  } = this.state;

		if (item.length < 3) {
			errors.title = 'Note must be at least 3 characters.';
			formIsValid = false;
		}

		if (item.length > 160) {
			errors.title = 'Note must be no more than 160 characters.';
			formIsValid = false;
		}

		this.setState({errors: errors});
		return formIsValid;
	}

	cleanInputAfterModalClose() {
		this.setState({
			note: {item: ''},
			errors:{title:''}
		});
	}

	render(){

		const { 
			errors, 
			note, 
			isDisabled } 
			= this.state;

		const { notes } = this.props;

		return (
			<div>
				{notes.length ===  0 ?
					<EmptyList
						title="No notes yet"
						subtitle="Add new note"
					/>
					:
					<List
						title="Notes"
						items={notes}
						deleteItem={this.removeNote}
						forwardButton
					/>
				}
				<ModalContainer
					callback={this.cleanInputAfterModalClose}
					addButton
				>
					<ItemForm
						name="item"
						callback={this.onHandleChange}
						itemValue={note.item}
						addItem={this.addNote}
						errors={errors.title}
						buttonName="Add new item"
						buttonDisabled={isDisabled}
					/>
				</ModalContainer>
			</div>
		);
	}
}

NotesContainer.propTypes = {
	actions: PropTypes.object.isRequired,
	modals: PropTypes.object.isRequired,
	notes: PropTypes.array.isRequired,
	note: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
	const { notes } = state;

    return {
     notes
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(notesActions, dispatch),
    modals: bindActionCreators(modalActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);
