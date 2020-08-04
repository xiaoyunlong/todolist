import React, { Component } from 'react';
import { addToDoItem } from './../../actions';
import { connect } from 'react-redux';

class ToDoListInput extends Component{

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    handleInputChanged = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleInputChanged} />
                <button onClick = {() => this.props.addToDoItem(this.state.text)}>ADD</button>
            </div>
        );
    }
}


export default connect(null, { addToDoItem })(ToDoListInput);
