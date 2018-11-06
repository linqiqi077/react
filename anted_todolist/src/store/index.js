import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer.js'

// 创建图书管理员
// 把数据告诉图书管理员了，图书管理员可以去仓库查看全部数据了


  const store = createStore(
   reducer,
   applyMiddleware(thunk)
  );




export default store;