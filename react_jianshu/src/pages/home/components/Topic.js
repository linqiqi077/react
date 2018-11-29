// 主题组件
import React, { Component } from 'react';
// 如果需要使用到store里面的数据，需要连接到store
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style'

class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.list.map((item) => {
                        return (
                            // 因为是 immutable 类型数据，所以需要用get方法获取数据
                            <TopicItem key={item.get('id')}>
                                <img
                                    className="topic-pic"
                                    src={ item.get('imgUrl')}
                                />
                                { item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}
// 如果想从store取出数据来显示，那么需要在mapStateToProps这个函数中取,这个函数会接收到state的数据
const mapStateToProps = (state) => ({
    // 取到home下面topic的数据
    list: state.getIn(['home', 'topicList'])
})
export default connect(mapStateToProps, null)(Topic);