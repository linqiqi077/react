import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Header from './common/header/index.js'

class App extends Component {
  render() {
    return (
      // provider 里面包裹的数据都有能力使用store里面的数据，provider：提供者
      <Provider store={store}> 
      <Header></Header>
      </Provider>
    );
  }
}

export default App;
