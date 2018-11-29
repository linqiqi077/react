import axios from 'axios';
import { CHANGE_HOME_DATA } from './actionTypes'

// 创建action
const changeHomeData = (result)=>({
        type: CHANGE_HOME_DATA,
        topicList:result.topicList,
        articleList:result.articleList
    
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