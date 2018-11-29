import { fromJS } from 'immutable'
import {CHANGE_DETAIL} from './actionTypes'

// 第一步：用fromJS方法把数据转换为不可改变的数据
const defaultState = fromJS({
    title:"",
    content:""
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_DETAIL:
        return state.merge({
            title:action.titke,
            content:action.content
        })
        default:
            return state;
    }
}