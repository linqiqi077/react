import { combineReducers } from 'redux-immutable';
import {reducer as HeaderReducer } from '../common/header/store';
import {reducer as homeReducer }   from '../pages/home/store'
import {reducer as detailReducer }   from '../pages/detail/store'
import {reducer as loginReducer }   from '../pages/login/store'

// redux-immutable生产的数据也是不可修改的
// combineReducers： 用这个combineReducers 方法把一个大的reducer拆分成多个小的reducer，这样更加方便代码的维护
 const reducer = combineReducers({
    header:HeaderReducer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer
})
export default reducer;