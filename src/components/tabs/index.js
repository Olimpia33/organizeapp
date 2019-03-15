import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Tabs = ({
  data,
  handleClick,
  tabs,
  tabClass
}) =>  (
  <div className={style.main}>
    <div className={tabs}>
      {data.map((tab, index) => {
        return (
          <div
              key={tab.id}
              className={tabClass}
              onClick={() => handleClick(tab.id)}
            >
              {tab.label}
          </div>
        );
      })}
    </div>
  </div>
);

Tabs.propTypes = {
  data: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  tabs: PropTypes.string,
  tabClass: PropTypes.string,
  linkClass: PropTypes.string
};

export default Tabs;
