import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer'

// 创建store，必须引入reducer，这样创建的store才有意义
const store = createStore(reducer,applyMiddleware(thunk))
export default store;