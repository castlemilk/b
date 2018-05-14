import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VerticleTimelineWrapper from './VerticleTimelineWrapper';

class VerticalTimeline extends Component {
  render() {
    const { animate, children } = this.props;
    let { className } = this.props;

    className += ' vertical-timeline';

    if (animate) {
      className += ' vertical-timeline--animate';
    }

    return (
    <VerticalTimeline>
        <div className={className.trim()}>
            {children}
        </div>
    </VerticalTimeline>
    );
  }
}

VerticalTimeline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  animate: PropTypes.bool
};

VerticalTimeline.defaultProps = {
  animate: true,
  className: ''
};

export default VerticalTimeline;