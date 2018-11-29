import React, { Component } from 'react';
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'
import { actionCreators } from './store'

class Detail extends Component {
    componentDidMount() {
        this.props.getDetail()
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
    getDetail(){
        dispatch(actionCreators.getDetail())
    }
})
export default connect(mapState, mapDispatch)(Detail);