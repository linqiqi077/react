import React, { Component } from 'react';
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store'


class Home extends Component {
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvent()
    }
    handleScrollTop() {
        window.scrollTo(0, 0)
    }

    bindEvent() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

    componentWillUnmount(){
        // 组件移除的时候需要把监听事件也移除
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
    render() {
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img
                            className="banner-img"
                            src="https://upload.jianshu.io/admin_banners/web_images/4579/0e3caa20d3d30658dc4b393d1ea105baa7e78248.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                            alt=""
                        />
                        <Topic />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writer />
                    </HomeRight>
                    {
                        this.props.showScroll ?
                            <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
                            : null
                    }
                </HomeWrapper>
            </div>
        )
    }
}
const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
    // action通过这种方法派发给store。store会直接转发给reducer；
    changeHomeData() {
        // 接受actionCreator创建的action，然后派发给store
        const action = actionCreators.getHomeInfo()
        dispatch(action)
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop >200) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})
export default connect(mapState, mapDispatch)(Home);