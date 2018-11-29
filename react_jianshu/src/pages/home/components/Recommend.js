// 推荐组件
import React, { Component } from 'react';
import { connect } from 'react-redux'

import { RecommendWrapper, RecommendItem } from '../style'

class Recommend extends Component {
    render() {
        const { list } = this.props;
        return (
            <div>

                <RecommendWrapper>
                    {
                        list.map((item)=>{
                            return (
                                <RecommendItem
                                key={item.get('id')}
                                imgUrl={item.get('imgUrl')}>
                                </RecommendItem>
                            )
                        })
                    }
                </RecommendWrapper>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommandList'])
})
export default connect(mapState, null)(Recommend);