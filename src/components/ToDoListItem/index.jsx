import React, { Component } from 'react';

class ToDoListItem extends Component{

    render() {
        return (
            <div>
                <span>{ this.props.item }</span>
                <button onClick={() => this.props.handleDelete(this.props.index)}>X</button>
            </div>
        );
    }
}

export default ToDoListItem;
