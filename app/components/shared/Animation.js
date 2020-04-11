import PropTypes from "prop-types";
import React from "react";
import * as RNAnimatable from "react-native-animatable";

export default class Animation extends React.Component {
  static propTypes = {
    animation: PropTypes.string,
    delay: PropTypes.number,
    direction: PropTypes.string,
    duration: PropTypes.number,
    autoHide: PropTypes.bool,
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.any,
  };

  static defaultProps = {
    animation: "",
    delay: 0,
    direction: "normal",
    duration: 1000,
    autoHide: false,
    count: 1,
    style: {},
  };

  state = {
    show: true,
  };

  // Expose all used animations
  fadeIn = (ms) => this.view.fadeIn(ms).then(this._handleAnimationEnd);
  fadeOut = (ms) => this.view.fadeOut(ms).then(this._handleAnimationEnd);

  _handleAnimationEnd = () => {
    const { autoHide } = this.props;
    if (autoHide) {
      this.setState({ show: false });
    }
  };

  render() {
    const {
      animation,
      count,
      delay,
      direction,
      duration,
      children,
      style,
    } = this.props;
    const { show } = this.state;
    if (!show) {
      return null;
    }
    return (
      <RNAnimatable.View
        ref={(component) => (this.view = component)}
        style={style}
        animation={animation}
        delay={delay}
        direction={direction}
        duration={duration}
        iterationCount={count}
        onAnimationEnd={this._handleAnimationEnd}
      >
        {children}
      </RNAnimatable.View>
    );
  }
}
