import React, { Component, Fragment } from 'react';
import "./style.css";
import TodoItem from './TodoItem';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.addList = this.addList.bind(this);
		this.addList = this.addList.bind(this);
		this.delItem = this.delItem.bind(this)
	}

	handleInputChange(event) {
		let value = event.target.value;
		this.setState(() => ({ inputValue: value })) // 现在setState可以接受一个函数
		// this.setState({
		// 	inputValue: value
		// })
	}

	addList() {
		this.setState((prevState) => ({ // setState可以接收一个参数，就是修改前的状态
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}))

		// this.setState({
		// 	list: [...this.state.list, this.state.inputValue],
		// 	inputValue: ''
		// })
	}

	delItem(i) {
		// var list = [...this.state.list];
		// list.splice(i, 1)
		this.setState((prevState) => {
			var list = [...prevState.list];
			list.splice(i, 1)
			return { list }
		})

		// this.setState(
		// 	{
		// 		list: list
		// 	}
		// )
	}
	getTodoItem() {
		return (
			this.state.list.map((val, index) => {
				console.log(val)
				return (
					<div key = {index}>
						<TodoItem
							val={val}
							index={index}
							deleteItem={this.delItem}
						/>
						{/* <li
						key={index}
						onClick={this.delItem.bind(this, index)}
						dangerouslySetInnerHTML={{ __html: val }}
					>
					</li> */}
					</div>
				)
			})
		)
	}
	render() {
		return (
			<Fragment>
				<div>


					{/* label的htmlFor的属性可以与input的id绑定，如果点击label，可以聚焦在input框里面 */}
					<label htmlFor='insertArea'>输入内容</label>
					<input
						id='insertArea'
						className='input'
						value={this.state.inputValue}
						onChange={this.handleInputChange}
					/><button onClick={this.addList}>提交</button>
				</div>
				<ul>
					{/* dangerouslySetInnerHTML 禁止符号自动转义 */}
					{
						this.getTodoItem()
					}
				</ul>

			</Fragment>

		)
	}
}

export default TodoList;

