import { fromJS } from 'immutable'
// 第一步：用fromJS方法把数据转换为不可改变的数据
const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            imgUrl: "https://upload-images.jianshu.io/upload_images/13797807-c5085d65aabcd066.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
            title: "社会热点"
        },
        {
            id: 2,
            imgUrl: "https://upload-images.jianshu.io/upload_images/13797807-c5085d65aabcd066.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
            title: "热点"
        },
        {
            id: 3,
            imgUrl: "https://upload-images.jianshu.io/upload_images/13797807-c5085d65aabcd066.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
            title: "历史"
        },
    ]
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

        default:
            return state;
    }
}