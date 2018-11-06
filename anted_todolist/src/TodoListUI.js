import React, {  Fragment } from 'react';
import { Input, Button, List } from 'antd';
// 只负责ui的渲染没有逻辑的处理的组件称为无状态组件(简单来看只有render函数的组件称为无状态组件)；
const TodoListUI = (props) => {
    return (
        <Fragment >
            <Input
                value={props.inputValue}
                style={{ width: "300px" }}
                placeholder="todo info"
                onChange={props.handleInputChange}
            />
            <Button
                type="primary"
                style={{ marginLeft: "15px" }}
                onClick={props.handleBtnClick}
            >提交</Button>
            <List
                style={{ marginTop: "30px", width: "300px" }}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item onClick={() => { props.delItem(index) }}>{item}</List.Item>)}
            />
        </Fragment>
    )
}
// class TodoListUI extends Component {
//     render() {
//         return (
//             <Fragment >
//                 <Input
//                     value={this.props.inputValue}
//                     style={{ width: "300px" }}
//                     placeholder="todo info"
//                     onChange={this.props.handleInputChange}
//                 />
//                 <Button
//                     type="primary"
//                     style={{ marginLeft: "15px" }}
//                     onClick={this.props.handleBtnClick}
//                 >提交</Button>
//                 <List
//                     style={{ marginTop: "30px", width: "300px" }}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item) => (<List.Item onClick={(index)=>{ this.props.delItem(index)}}>{item}</List.Item>)}
//                 />
//             </Fragment>
//         )
//     }
// }
export default TodoListUI;