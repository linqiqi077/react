import {CHANGE_INPUT_VALUE , CHANGE_LIST_VALUE , DEL_ITEM,INIT_LIST_VALUE} from './actionTypes.js'
const defaultSate = {
    inputValue: "",
    list: []
};

// 默认什么数据都不存储
export default (state = defaultSate, action) => {
    // state 表示是图书管理所有的数据
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === CHANGE_LIST_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = '';
        return newState;
    }

    if(action.type ===DEL_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1)
        return newState;
    }

    if(action.type ===INIT_LIST_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    return state;
}