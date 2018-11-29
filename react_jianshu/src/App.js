import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/index';
import Header from './common/header/index.js'

// import Home from './pages/home/index';
// import Detail from './pages/detail/index'
// 等价于上面，会自动找到index.js文件

import Home from './pages/home';
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      // provider 里面包裹的数据都有能力使用store里面的数据，provider：提供者
      <Provider store={store}>
        <div>
          <Header></Header>
          <BrowserRouter>
            {/* 用 BrowserRouter 表示这里的内容需要使用路由了 */}
            {/* exact 这个属性表示路径需要完全匹配才显示路由下面的组件，如果没有 exact 这个属性，则有包含关系的路由组件也是会被显示的 */}
            <div>
              <Route path='/' exact component={Home}></Route>

              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>

      </Provider>
    );
  }
}

export default App;
