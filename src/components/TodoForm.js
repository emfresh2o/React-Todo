import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super()
        this.state = {
            newItem: ""
        }
    }
    handleChanges = (e) => {
        this.setState({
            newItem: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewItem(this.state.newItem);
        this.setState({newTodo: ""});
    }

  
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="item" placeholder="...todo" value={this.state.newItem} onChange={this.handleChanges}/>
                <button>Add Todo</button>
            </form>
        );
    }
};

export default TodoForm;