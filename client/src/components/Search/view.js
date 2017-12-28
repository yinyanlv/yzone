import React from 'react';
import {connect} from 'react-redux';
import {Input} from 'antd';
import 'antd/lib/button/style/index.css';

class Search extends React.Component {

  constructor() {

    super();

    this.state = {
      keyword: ''
    };

    this.onInput = this.onInput.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  render() {

    return (
      <Input.Search
        size="large"
        placeholder="请输入关键字"
        enterButton="搜索"
        onInput={this.onInput}
        onSearch={this.onSearch}
      />
    );
  }

  onInput(e) {

    console.log(`input keyword is ${e.target.value}`);
  }

  onSearch(keyword) {

    console.log(`search keyword is ${keyword}`);
  }
}

export default connect()(Search);