import axios from 'axios';
// 如果结果是不可改变类型的，那么从action传过去到reducer的数据也要是不可改变类型的；
import { fromJS } from 'immutable'
import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST,MOUSE_ENTER ,MOUSE_LEAVE,CHANGE_PAGE} from './actionTypes'

const changeList = (data) => ({
    type: CHANGE_LIST,
    list: fromJS(data.data),
    totalPage: Math.ceil(data.data.length / 10)
})

export const searchFocus = () => ({
    type: SEARCH_FOCUS,

})

export const searchBlur = () => ({
    type: SEARCH_BLUR,

})


export const getList = () => {
    // 因为用了redux-thunk，可以返回对象也可以返回函数，我们这里需要做一步请求，所以是返回一个函数，这里的函数还可以接收一个dispatch方法
    return (dispatch) => {
        axios.get('/api/headerList.json')
            .then((res) => {
                const data = res.data;
                //  拿到数据后要通过action派发给store，store会直接转发给reducer
                // action应该由actionCreators来创建

                dispatch(changeList(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const MouseEnter = () => ({
    type: MOUSE_ENTER
})

export const MouseLeave = ()=>({
    type: MOUSE_LEAVE
})

export const handleChangePage = (page)=>({
    type: CHANGE_PAGE,
    page
})