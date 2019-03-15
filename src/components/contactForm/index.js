import React, { Component } from 'react';
import style from './style.scss';
import TextInput from '../text-input/index';
import TextArea from '../textarea/index';
import Button from '../buttons/index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ContactForm extends Component {
  constructor(props){
  super(props);

  this.state = {
    name: '',
    mail: '',
    message: '',
    formErrors: { name: '', mail: '', message: '' },
    nameValid: false,
    mailValid: false,
    messageValid: false,
    formValid: false
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value}, 
        () => { this.validateField(name, value);
    });
  }

  validateField(fieldName, value){
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let mailValid = this.state.mailValid;
    let messageValid = this.state.messageValid;

    switch(fieldName) {
      case 'name':
        nameValid = value.length >= 3;
        fieldValidationErrors.name = nameValid ? '' : 'Use at least 3 characters';
        break;
      case 'mail':
        mailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.mail = mailValid ? '' : 'Add correct email';
        break;
      case 'message':
        messageValid = value.length >=6;
        fieldValidationErrors.message = messageValid ? '' : 'Use at least 6 characters';
        break;
      default:
      break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      nameValid,
      mailValid,
      messageValid
      }, 
      this.validateForm);
    }

  validateForm() {
    this.setState({
      formValid: this.state.nameValid && this.state.mailValid && this.state.messageValid
    });
  }   

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName={style}
        transitionAppear
        transitionAppearTimeout={300}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className={style.wrapper}>
          <form onSubmit={this.handleSubmit}>
            <TextInput
              type="text"
              label="Name"
              name="name"
              value={this.state.name}
              inputWrapper={style.inputWrapper}
              callback={this.handleChange}
              error={this.state.formErrors.name}
            />
            <TextInput
              type="text"
              label="Mail"
              name="mail"
              value={this.state.mail}
              inputWrapper={style.inputWrapper}
              callback={this.handleChange}
              error={this.state.formErrors.mail}
            />
            <TextArea
              label="Message"
              name="message"
              value={this.state.messsage}
              textareaWrapper={style.textAreaWrapper}
              callback={this.handleChange}
              error={this.state.formErrors.message}
            />
            <Button
              value="Send"
              className={!this.state.formValid 
                ? style.disabled : style.sendButton}
              disabled={!this.state.formValid}
            />
          </form>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default ContactForm;
