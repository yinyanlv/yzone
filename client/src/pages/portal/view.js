import React, {Component} from 'react';
import {connect} from 'react-redux';

class Portal extends Component {

  render() {

    return <div>hello, here is portal</div>;
  }
}

export default connect()(Portal);