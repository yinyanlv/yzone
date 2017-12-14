import React, {Component} from 'react';

export default class ClickCounter extends Component {

  constructor(props) {

    super(props);

    this.state = {count: 0};
    this.addOne = this.addOne.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.addOne}>点击增加1</button>
        <div>
          统计：{this.state.count}
        </div>
      </div>
    );
  }

  addOne() {

    this.setState({
      count: this.state.count + 1
    });
  }
}