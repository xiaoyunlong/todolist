import React, { Component } from 'react';
import { addToDoItem } from './../../actions';
import { connect } from 'react-redux';

class ToDoListInput extends Component{

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.ref = React.createRef();
    }

    handleInputChanged = (event) => {
        this.setState({
            text: event.target.value
        });       
    }

    handleClick = () => {
        if(this.state.text.trim() !== ""){
            this.props.addToDoItem(this.state.text);
            this.ref.current.value = ""
        } else {
            alert("Please input todo item!");
        }
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.ref} onChange={this.handleInputChanged} />
                <button onClick = {this.handleClick}>ADD</button>
            </div>
        );
    }
}


export default connect(null, { addToDoItem })(ToDoListInput);
