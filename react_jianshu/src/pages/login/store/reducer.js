import { fromJS } from 'immutable';
import { CHANGE_LOGIN,CHANGE_LOGOUT } from './actionTypes'

// 第一步：用fromJS方法把数据转换为不可改变的数据
const defaultState = fromJS({
    login:false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN:
        return state.set('login',action.login);
        case CHANGE_LOGOUT:
        return state.set('login',action.login);
        default:
            return state;
    }
}