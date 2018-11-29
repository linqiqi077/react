import { fromJS } from 'immutable'

import pic1 from '../../../statics/banner-1.png'
import pic2 from '../../../statics/banner-2.png'
import pic3 from '../../../statics/banner-3.png'
import pic4 from '../../../statics/banner-4.png'
import pic5 from '../../../statics/banner-5.png'

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
    ],
    articleList: [
        {
            id:1,
            titlt:"9分大尺度神剧5星回归，建议边看边打码",
            desc:"一下班就想赶紧回家看的剧，又回来了。 HBO黄暴大剧之一。 虽说“黄暴”之心不改，但如果光是冲着情色才想看它，那也太低估这部大爽片。 字幕来自人",
            imgUrl:"https://upload-images.jianshu.io/upload_images/1211570-c2a25ef16d8cf02b?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },
        {
            id:2,
            titlt:"9分大尺度神剧5星回归，建议边看边打码",
            desc:"一下班就想赶紧回家看的剧，又回来了。 HBO黄暴大剧之一。 虽说“黄暴”之心不改，但如果光是冲着情色才想看它，那也太低估这部大爽片。 字幕来自人",
            imgUrl:"https://upload-images.jianshu.io/upload_images/1211570-c2a25ef16d8cf02b?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },
        {
            id:3,
            titlt:"9分大尺度神剧5星回归，建议边看边打码",
            desc:"一下班就想赶紧回家看的剧，又回来了。 HBO黄暴大剧之一。 虽说“黄暴”之心不改，但如果光是冲着情色才想看它，那也太低估这部大爽片。 字幕来自人",
            imgUrl:"https://upload-images.jianshu.io/upload_images/1211570-c2a25ef16d8cf02b?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },
    ],
    recommandList:[
        {
            id:1,
            imgUrl: pic1
        },
        {
            id:2,
            imgUrl: pic2
        },
        {
            id:3,
            imgUrl: pic3
        },
        {
            id:4,
            imgUrl: pic4
        },
        {
            id:5,
            imgUrl: pic5
        }
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