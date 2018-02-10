import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import globals from '../../styles/globals.scss';
import Modal from './comp.modal.js';
import Button from '../buttons/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modalActions';

class ModalContainer extends React.Component {
    constructor(props){
        super(props);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.props.actions.showModal();
    }

    closeModal() {
        this.props.actions.hideModal();
        this.props.callback();
    }

    render(){
        const {
            disabled,
            isShowing,
            children,
            addButton
        } = this.props;

        return (
            <div className={style.main}>
                {addButton &&
                    <Button
                        value="+"
                        onClick={this.openModal}
                        className={disabled === true ?
                        style.disabled : style.outerButton}
                        disabled={disabled}
                    />
                }
                <Modal
                    isOpen={isShowing}
                    close={this.closeModal}
                >
                    {children}
                </Modal>
            </div>
        );
    }
}

ModalContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    isShowing: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    callback: PropTypes.func,
    children: PropTypes.object,
addButton: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => {
    const { modal: {isShowing} } = state;
    return {
        isShowing
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(modalActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
