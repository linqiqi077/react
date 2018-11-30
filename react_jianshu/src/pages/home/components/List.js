// 列表组件
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {ListWrapper, ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends Component {
    render() {
        const { list, page } = this.props;
        return (
            <ListWrapper>
                {
                    list.map((item, index) => {
                        return (
                            // 动态路由配置方式
                            <Link  key={index} to={'/detail/' + item.get('id')} className="link">
                            {/* <Link  key={index} to={'/detail?id=' + item.get('id')} className="link"> */}
                                <ListItem>
                                    <img
                                        className="pic"
                                        src={item.get('imgUrl')}
                                        alt=""
                                    />
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>


                        )
                    })
                }
                <LoadMore onClick={() => this.props.getMoreList(page)}>更多文字</LoadMore>
            </ListWrapper>

        )
    }
}
// 接收state的数据
const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})
// 派发dispatch数据,把异步请求在action里面做，请求道数据之后，再派发一个同步的action，所以在异步操作时会派发一个action。如果有异步请求，一共会派发两个action
const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})

// connect方法是使组件连接store
export default connect(mapState, mapDispatch)(List);