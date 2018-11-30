import axios from 'axios';
import { CHANGE_LOGIN ,CHANGE_LOGOUT} from './actionTypes'

const changeLogin = () => ({
    type: CHANGE_LOGIN,
    login:true
})

export const login = (account, pass) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + pass)
            .then((res) => {
                const result = res.data.data;
                dispatch(changeLogin(result))
            })
            .catch(e => {
                console.log('登录失败')
            })
    }
}

export const logout = () => ({
    type: CHANGE_LOGOUT,
    login:false
})