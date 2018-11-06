import axios from 'axios'
import {CHANGE_INPUT_VALUE,CHANGE_LIST_VALUE,DEL_ITEM,INIT_LIST_VALUE} from './actionTypes'

export const changeInputValue = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const changeListValue = ()=>({
    type:CHANGE_LIST_VALUE,
})

export const del_item = (index)=>({
    type:DEL_ITEM,
    index
})

export const init_list_value = (data)=>({
    type:INIT_LIST_VALUE,
    data
})

export const getTodoList = () =>{
    // 如果action返回的是一个函数，那么这个函数会接收到dispatch这个方法，所以不需要引进store再使用store的dispatch方法
    return (dispacth)=>{
        axios.get('/list.json').then((res)=>{
            const data = res.data;
            const action = init_list_value(data);
            dispacth(action)
			
		})
    }
}