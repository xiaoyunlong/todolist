import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoListInput from './../ToDoListInput';
import ToDoListItem from './../ToDoListItem';
import { deleteToDoItem } from './../../actions'
import PropTypes from 'prop-types'

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

ToDoList.propTypes = {
    items: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        items: state.toDoListReducer.items
    }
}

export default connect(mapStateToProps, { deleteToDoItem })(ToDoList);
