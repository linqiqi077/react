// 列表组件
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ListItem, ListInfo } from '../style'

class List extends Component {
    render() {
    const { list } = this.props;
        return (
            <div>
                {
                    list.map((item)=>{
                        return (
                            <ListItem key={ item.get('id') }>
                            <img 
                            className="pic"
                            src={item.get('imgUrl')}
                            alt=""
                             />
                            <ListInfo>
                                <h3 className="title">{ item.get('title')}</h3>
                                <p className="desc">{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
        
                        )
                    })
                }
                
            </div>

        )
    }
}
// 接收state的数据
const mapState = (state) =>({
    list: state.getIn(['home','articleList'])
}) 

// connect方法是使组件连接store
export default connect(mapState,null)(List);