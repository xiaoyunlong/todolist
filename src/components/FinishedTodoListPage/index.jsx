import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteToDoItem, achieveTodoItem } from './../../actions'
import TodoListItem from '../TodoListItem';

class FinishedTodoListPage extends Component {

    render() {
        return (
            <div>
                <h2>Finished TodoList</h2>
                {
                    this.props.items.map((item, index) => 
                        <TodoListItem key={index} index={index} item={item}
                            handleDelete={this.props.deleteToDoItem}
                            handleAchieve={this.props.achieveTodoItem} />)
                }
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        items: state.toDoListReducer.items.filter(item => item.done)
    }
}

export default connect(mapStateToProps, { deleteToDoItem, achieveTodoItem })(FinishedTodoListPage);
