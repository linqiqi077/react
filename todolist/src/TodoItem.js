import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.val,
            index:this.props.index
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.deleteItem(this.state.index)
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.item}
            </div>
        )
    }
}

export default TodoItem;