import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoListInput from './../ToDoListInput';
import ToDoListItem from './../ToDoListItem';
import { deleteToDoItem } from './../../actions'

class ToDoList extends Component{

    render() {
        return (
            <div>
                <ToDoListInput />
                {
                    this.props.items.map((item, index) => 
                        <ToDoListItem key={index} index={index} item={item}
                            handleDelete={this.props.deleteToDoItem} />)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.toDoListReducer.items
    }
}

export default connect(mapStateToProps, { deleteToDoItem })(ToDoList);
