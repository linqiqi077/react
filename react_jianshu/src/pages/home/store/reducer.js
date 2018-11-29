import { fromJS } from 'immutable'
import { CHANGE_HOME_DATA, ADD_HOME_LIST, TOGGLE_SCROLL_SHOW } from './actionTypes'

import pic1 from '../../../statics/banner-1.png'
import pic2 from '../../../statics/banner-2.png'
import pic3 from '../../../statics/banner-3.png'
import pic4 from '../../../statics/banner-4.png'
import pic5 from '../../../statics/banner-5.png'

// 第一步：用fromJS方法把数据转换为不可改变的数据
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    "recommandList": [{
        "id": 1,
        "imgUrl": pic1
    },
    {
        "id": 2,
        "imgUrl": pic2
    },
    {
        "id": 3,
        "imgUrl": pic3
    },
    {
        "id": 4,
        "imgUrl": pic4
    },
    {
        "id": 5,
        "imgUrl": pic5
    },
    ],
    articlePage: 1,
    showScroll: false
});
// immutable 监控数据不可改变
const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList)
    });
}

const addHomeList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    });
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_HOME_DATA:
             return changeHomeData(state, action); 
        case ADD_HOME_LIST:
            return addHomeList(state, action);
        case TOGGLE_SCROLL_SHOW:
            return state.set('showScroll', action.show);
        default:
            return state;
    }
}