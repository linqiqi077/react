import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { HeaderWrapper, Logo, Nav, NavItem, SreachWrapper, NavSearch, Addition, Button, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style.js';

class Header extends Component {

    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const jsList = list.toJS(); // 这个是把一个不可变类型的数组变成普通数组，那么下面就可以直接使用数组索引方式获取值
        const pageList = [];
        if (jsList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (

                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                             <SearchInfoSwitch
                            onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
                            换一批
                            </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
        return (
            <div>
                <HeaderWrapper>
                    <Logo />
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem tem className="left">下载App </NavItem>
                        {

                            login ?
                                <NavItem className="right" onClick={logout}>退出</NavItem> :
                                <Link to="/login">
                                    <NavItem className="right">登录</NavItem>
                                </Link>
                        }

                        <NavItem className="right">
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <SreachWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames='slide'
                            >
                                <NavSearch
                                    className={focused ? "focused" : ""}
                                    onFocus={() => handleInputFocus(list)}
                                    onBlur={handleInputBlur}
                                ></NavSearch>
                            </CSSTransition>
                            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe614;</i>
                            {this.getListArea()}
                        </SreachWrapper>
                    </Nav>
                    <Addition>
                        <Link to="/write">
                            <Button className='writting'>
                                <i className="iconfont" >&#xe615;</i>
                                写文章
                        </Button>
                        </Link>
                        <Button className="reg">注册</Button>
                    </Addition>
                </HeaderWrapper>
            </div>

        )
    }
}

// 如果想从store取出数据来显示，那么需要在mapStateToProps这个函数中取
const mapStateToProps = (state) => {
    // 使用了immutable这个库，不可以直接使用.来获取属性的值，需要用get方法来获取属性值；
    return {
        // 等同于  focused: state.get('header').get("focused") 
        focused: state.getIn(['header', "focused"]),
        list: state.getIn(['header', "list"]),
        page: state.getIn(['header', "page"]),
        totalPage: state.getIn(["header", "totalPage"]),
        mouseIn: state.getIn(['header', "mouseIn"]),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        // 一般把ajax的请求放在action里面或者放在redux-thunk
        //  react-thunk是redux的中间件，是指的action和store之间的中间件 使得可以在action里面写函数
        // 当我们聚焦的时候派发一个action，action由actionCreators创建的
        handleInputFocus(list) {
            // 判断是否需要发送请求，避免不必要的没有意义的请求
            if (list.size === 0) {
                dispatch(actionCreators.getList())
            }
            const action = actionCreators.searchFocus()
            dispatch(action)
        },

        handleInputBlur() {
            const action = actionCreators.searchBlur()
            dispatch(action)
        },
        handleMouseEnter() {
            const action = actionCreators.MouseEnter();
            dispatch(action)
        },
        handleMouseLeave() {
            const action = actionCreators.MouseLeave();
            dispatch(action)
        },
        handleChangePage(page, totalPage, spin) {

            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10)
            } else {
                originAngle = 0
            }
            spin.style.transform = 'rotate(' + (originAngle + 180) + 'deg)';

            var action;
            if (page < totalPage) {
                action = actionCreators.handleChangePage(page + 1);
            } else {
                action = actionCreators.handleChangePage(1);
            }
            dispatch(action)
        },
        logout() {
            // 派发一个人login组件下面的action
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)