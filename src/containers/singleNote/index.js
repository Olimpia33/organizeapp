import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import Button from '../../components/buttons/index';
import ItemForm from '../../components/itemForm/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as notesActions from '../../actions/notesActions';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Note extends Component {
	constructor(props){
    super(props);
      const { note } = props;
      this.state = {
        note: note.item,
        isEditing: false,
        errors: { title: '' }
      };

		this.onChange = this.onChange.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.upDate = this.upDate.bind(this);
	}

  componentWillReceiveProps(nextProps) {
    if (this.props.note.id != nextProps.note.id) {
        this.setState({ note: nextProps.note });
    }
  }

	onChange(e) {
    const note = e.target.value;
		this.setState({ note });
	}

	toggleEdit(e) {
    e.preventDefault();
		this.setState({ isEditing: !this.state.isEditing });
	}

	upDate(e) {
    e.preventDefault();
    if (!this.isFormValid()) {
      return;
    }
		this.props.actions.updateNotesList(this.state.note);
    this.setState({ isEditing: !this.state.isEditing });
	}


  isFormValid() {
    let formIsValid = true;
    let errors = {};
    const { note } = this.state;

    if (note.length < 3) {
      errors.title = 'Note must be at least 3 characters.';
      formIsValid = false;
    }

    if (note.length > 160) {
      errors.title = 'Note must be no more than 160 characters.';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

	render() {
    const { 
      isEditing, 
      note, 
      errors 
    } = this.state;
    
		return (
			<div>
        <ReactCSSTransitionGroup
          transitionName={style}
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Link to="organizer">
            <Button
              value=" << BACK"
              className={style.back}
            />
          </Link>
          <div className={style.wrapper} >
              <div className={style.note} >
                <h5> Edit your note if you want :-) </h5>
                <ItemForm
                  name="item"
                  itemValue={note}
                  callback={this.onChange}
                  saveItem={this.upDate}
                  editItem={this.toggleEdit}
                  isEdit={isEditing}
                  isEditable
                  disabled={!isEditing}
                  errors={errors.title}
                />
              </div>
          </div>
        </ReactCSSTransitionGroup>
			</div>
		);
	}
}

Note.propTypes = {
  note: PropTypes.object,
	notes: PropTypes.array,
	params: PropTypes.number,
	actions: PropTypes.object
};

const getNoteById = (notes, id) => {
  const note = notes.filter( note => note.id == id);
  if (notes) return note[0];
  return null;
};

const mapStateToProps = (state, ownProps) => {
    const { notes } = state;
    let id = ownProps.params.id;
    let note = {item: '', id: ''};

    if (id && notes.length > 0) {
        note = getNoteById(notes, id);
    }
    return {
        note
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(notesActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
