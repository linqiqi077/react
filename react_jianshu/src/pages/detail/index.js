import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'
import { actionCreators } from './store'

class Detail extends PureComponent {
    componentDidMount() {
        // 动态路由的参数获取方式 this.props.match.params.id
        this.props.getDetail(this.props.match.params.id);
    }
    render() {
        const { title, content } = this.props;
        return (
            <div>
                <DetailWrapper>
                    <Header>{title}</Header>
                    {/* dangerouslySetInnerHTML相当于innerHTML */}
                    <Content dangerouslySetInnerHTML={{ __html: content }} />
                </DetailWrapper>
            </div>
        )
    }
}
const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
})
export default connect(mapState, mapDispatch)(Detail);