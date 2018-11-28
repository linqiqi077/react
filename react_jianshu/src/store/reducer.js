import { combineReducers } from 'redux-immutable';
import {reducer as HeaderReducer } from '../common/header/store';

// redux-immutable生产的数据也是不可修改的
 const reducer = combineReducers({
    header:HeaderReducer
})
export default reducer;