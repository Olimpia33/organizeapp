import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tabs from '../../components/tabs/index';
import TaskContainer from '../../containers/tasksList/index';
import NotesContainer from '../../containers/notesList/index';
import Rating from '../../components/rating/index';
import style from './style.scss';


class OrganizerPage extends React.Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({
        activeTab: index
    });
  }

  renderContent() {
    const { activeTab } = this.state;
    switch(activeTab){
      case 1:
        return ( <NotesContainer /> );
      case 2:
        return ( <TaskContainer />);
    }
  }

  render() {
    const { tasks } = this.props;

    const tabs = [
        { id: 1, label: 'Notes' },
        { id: 2, label: 'Tasks', child:  <Rating points={tasks.length} />}
    ];

    return (
      <div className={style.container}>
        <Tabs
          data={tabs}
          handleClick={this.handleClick}
          tabs={style.tabs}
          tabClass={style.tab}
          linkClass={style.link}
         />
        <div className={style.content}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}
OrganizerPage.propTypes = {
	tasks: PropTypes.array.isRequired
};

const mapStateToProps = state => {
	const { tasks } = state;
    return {
      tasks
    };
};

export default connect(mapStateToProps)(OrganizerPage);
