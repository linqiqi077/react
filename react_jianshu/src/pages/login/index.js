import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store'

class Login extends PureComponent {

    render() {
        const { loginValue } = this.props;
        if (!loginValue) {
            return (
                <div>
                    <LoginWrapper>
                        <LoginBox>
                            {/* innerRef 获取元素的dom */}
                            <Input placeholder="账号" innerRef={(input) => { this.account = input }} />
                            <Input placeholder="密码" type='password' innerRef={(pass) => { this.password = pass }} />
                            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                        </LoginBox>
                    </LoginWrapper>
                </div>
            )
        }else{
            return (
                <Redirect to="/"/>
            )
        }
        
    }
}
const mapState = (state) => ({
    loginValue: state.getIn(['login', "login"])
})

const mapDispatch = (dispatch) => ({
    login(accountEle, password) {
        dispatch(actionCreators.login(accountEle.value, password.value))
    }

})
export default connect(mapState, mapDispatch)(Login);