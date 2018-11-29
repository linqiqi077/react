import axios from 'axios';
import { fromJS } from 'immutable'; // fromJS方法也可以吧一个普通数组改变为immutable类型的数组
import { CHANGE_HOME_DATA,ADD_HOME_LIST } from './actionTypes'

// 创建action
const changeHomeData = (result)=>({
        type: CHANGE_HOME_DATA,
        topicList:result.topicList,
        articleList:result.articleList
    
})

const addHomeList =(result,nextPage)=>({
    type:ADD_HOME_LIST,
    list: fromJS(result),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
        .then((res)=>{
            // 修改store里面的数据
            const result = res.data.data;
            const action = changeHomeData(result)
            dispatch(action)
        })
        .catch(e=>{
            console.log(e)
        })
    }
}

export const getMoreList = (page)=>{
    // redux-thunk的特性是dispatch可以返回一个函数
    return (dispatch)=>{
       axios.get('/api/homeList.json?page='+ page)
       .then((res)=>{
           const result = res.data.data;
           dispatch(addHomeList(result,page+1))
       })
       .catch(e=>{
           console.log(e)
       })
    }
}