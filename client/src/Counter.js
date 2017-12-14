import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

export default class Counter extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    initialValue: PropTypes.number
  };

  static defaultProps = {
    initialValue: 0
  };

  constructor(props) {

    super(props);

    this.state = {
      title: props.title,
      count: props.initialValue
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {

    this.setState({
      count: this.state.count + 1
    });
  }

  decrement() {

    this.setState({
      count: this.state.count - 1
    });
  }

  render() {

    return (
      <div>
        {this.props.title}: <button onClick={this.decrement}>-</button> {this.state.count} <button onClick={this.increment}>+</button>
      </div>
    )
  }
}
