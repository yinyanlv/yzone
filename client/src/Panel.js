import React, {Component} from 'react';
import Counter from './Counter';

export default class Panel extends Component {

  render() {

    return (
      <div>
        <Counter title="标题一" initialValue={10} />
        <Counter title="标题二" initialValue={20} />
        <Counter title="标题三"  />
      </div>
    );
  }
}