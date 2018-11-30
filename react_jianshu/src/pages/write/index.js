import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends PureComponent {

    render() {
        const { loginValue } = this.props;
        if (loginValue) {
            return (
                <div>
                    写文章页面
                </div>
            )
        }else{
            return (
                <Redirect to="/login"/>
            )
        }
        
    }
}
const mapState = (state) => ({
    loginValue: state.getIn(['login', "login"])
})


export default connect(mapState, null)(Write);