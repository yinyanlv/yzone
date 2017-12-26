import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Input} from 'antd';

const Search = Input.Search;

class Portal extends Component {

  constructor() {

    super();

    this.state = {
      keyword: ''
    };

    this.onInput = this.onInput.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  render() {

    return [
      <Search
        size="large"
        placeholder="请输入关键字"
        enterButton="搜索"
        onInput={this.onInput}
        onSearch={this.doSearch} />,
      <div>{this.state.keyword}</div>
    ];
  }

  onInput(e) {

    this.setState({
      keyword: e.target.value
    });
  }

  doSearch(val) {

    console.log(val);
  }
}

export default connect()(Portal);