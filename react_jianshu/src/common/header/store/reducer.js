import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE,CHANGE_PAGE } from './actionTypes'
import { fromJS } from 'immutable'
// 第一步：用fromJS方法把数据转换为不可改变的数据
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});
// immutable 监控数据不可改变
export default (state = defaultState, action) => {
    // if (action.type === SEARCH_FOCUS) {
    //     // 第三步：用set方法来改变值，这里的set方法不是直接修改state的值，而是先复制一份在修改复制后的数据。然后返回修改后的值
    //     return state.set('focused', true);
    // }

    // if (action.type === SEARCH_BLUR) {
    //     return state.set('focused', false);
    // }
    // if (action.type === CHANGE_LIST) {
    //     return state.set('list', action.list);
    // }
    switch (action.type) {
        case SEARCH_FOCUS:
            return state.set('focused', true);
        case SEARCH_BLUR:
            return state.set('focused', false);
        case CHANGE_LIST:
            // return state.set('list', action.list).set('totalPage', action.totalPage);
            // 与上面功能相同，merge可以同时去改变多个数据的值，性能会更加高
            return state.merge({
                list:action.list,
                totalPage:action.totalPage
            })
        case MOUSE_ENTER:
            return state.set('mouseIn', true);
        case MOUSE_LEAVE:
            return state.set("mouseIn",false);
        case CHANGE_PAGE:
            return state.set('page',action.page)
        default:
            return state;
    }
    // return state;
}