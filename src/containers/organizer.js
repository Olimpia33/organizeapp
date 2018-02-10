import React from 'react';
import PropTypes from 'prop-types';
import style from '../components/tabs/style.scss';
import Tabs from '../components/tabs/index';
import TaskContainer from './taskContainer';
import NotesContainer from './notesContainer';

class Organizer extends React.Component {
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
        const tabs = [
            {id: 1, label: 'Notes'},
            {id: 2, label: 'Tasks'}
        ];

        return (
            <div className={style.main}>
                <div>
                <Tabs
                    data={tabs}
                    handleClick={this.handleClick}
                    tabs={style.tabs}
                    tabClass={style.tab}
                    linkClass={style.link}
                    />
                </div>
                <div className={style.content}>
                    {this.renderContent()}
                </div>
            </div>
        );
  }
}

export default Organizer;
