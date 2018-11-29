import axios from 'axios';
import {CHANGE_DETAIL} from './actionTypes'

const changeDetail = (result)=>({
    type:CHANGE_DETAIL,
    title:result.title,
    content:result.content
})

export const getDetail = ()=>{
    return (dispatch)=>{
        axios.get('/api/detail.json')
        .then((res)=>{
            const result = res.data.data;
            dispatch(changeDetail(result))
        })
        .catch(e=>{
            console.log(e)
        })
    }
}