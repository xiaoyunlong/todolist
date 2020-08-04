import React, { Component } from 'react';

class ToDoListItem extends Component{

    constructor(props){
        super(props);
        this.state = { done : false}
    }
    
    handleFinish = () =>{
        this.setState((preState)=>({
            done: ! preState.done
        }));   
    }

    render() {
        return (
            <div>
                <label onClick= { this.handleFinish} style={{ textDecorationLine: this.state.done ? 'line-through' : 'none' }}>
                    { this.props.item }
                </label>
                <button onClick={() => this.props.handleDelete(this.props.index)}>X</button>
            </div>
        );
    }
}

export default ToDoListItem;
