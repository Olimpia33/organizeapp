import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class ProgressBar extends Component {

    getWidth ()  {
        return parseInt(this.props.width * (this.props.percent / 100),10);
    }

    render() {

        const {
            percent, 
            width, 
            height, 
            text, 
            main, 
            fill
        } = this.props;

        const progressBar = {
            width: this.getWidth(),
            height: height
        };

        return (
            <div style={{ width: width}} className={main} >
                {percent >= 1 ?
                    <div className={fill} style={progressBar}>
                        <span className={style.prompt}>{text}</span>
                    </div>
                    :
                    <div className={style.start} style={progressBar}></div>
                }
            </div>
        );
    }
}

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
  main: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  text: PropTypes.string
};

ProgressBar.defaultProps = {
  height: 10
};

export default ProgressBar;
