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
	}

	handleInputChange(event) {
		let value = event.target.value;
		this.setState({
			inputValue: value
		})
	}

	addList() {
		this.setState({
			list: [...this.state.list, this.state.inputValue],
			inputValue: ''
		})
	}

	delItem(i) {
		const list = [...this.state.list];
		list.splice(i, 1)
		this.setState(
			{
				list: list
			}
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
						this.state.list.map((val, index) => {
							return (
								<div>
									<TodoItem
										val={val}
										index={index}
										deleteItem = {this.delItem.bind(this)}
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
					}
				</ul>

			</Fragment>

		)
	}
}

export default TodoList;

