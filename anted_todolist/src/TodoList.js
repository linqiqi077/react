import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/index.js';
// import {CHANGE_INPUT_VALUE , CHANGE_LIST_VALUE , DEL_I TEM} from './store/actionTypes.js'
import {getTodoList,changeInputValue,changeListValue,del_item,init_list_value} from './store/actionCreators.js'
import TodoListUI from './TodoListUI.js';
import axios from 'axios';


class TodoList extends Component {

	constructor(props) {
		super(props)
		this.state = store.getState()
		
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.delItem = this.delItem.bind(this)

		// store订阅state的变化
		store.subscribe(this.handleStoreChange)
	}

	componentDidMount () {
		const action = getTodoList()
		// action是一个函数，在我们把action发给store的时候，action会被自动执行
		store.dispatch(action)
	}

	handleInputChange(e) {
		const action =changeInputValue(e.target.value)
		store.dispatch(action)
	}

	handleStoreChange(){
		this.setState(store.getState())
	}

	handleBtnClick(){
		const action = changeListValue()
		store.dispatch(action)
	}
	delItem(index){
		const action =del_item(index)
		store.dispatch(action)
	}
	render() {
		return (
		<TodoListUI 
		inputValue = { this.state.inputValue} 
		list = {this.state.list}
		handleInputChange = {this.handleInputChange}
		handleBtnClick ={ this.handleBtnClick }
		delItem = { this.delItem}
		/>)
		
	}
}

export default TodoList;

