import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Tabs = ({
  data,
  handleClick,
  child
}) =>  (
  <div className={style.tabs}>
    {data.map(tab => {
      return (
        <div
            key={tab.id}
            className={style.tab}
            onClick={() => handleClick(tab.id)}
          >
            {tab.label} 
            <div className={style.badge}>{tab.child}</div>
        </div>
      );
    })}
  </div>

);

Tabs.propTypes = {
  data: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  tabs: PropTypes.string,
  tabClass: PropTypes.string,
  linkClass: PropTypes.string,
  child: PropTypes.object
};

export default Tabs;
