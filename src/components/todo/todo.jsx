import React, { Component } from 'react';
import "./todo.css";

class Todo extends Component {
    state = {
        todoText: "",
        todos: [],
      }
    render() { 
        return (
            <div>
            <h5>Add a List or Reminders!</h5>

                <div>
                    <input type="text" 
                    value={this.state.todoText} 
                    onChange={this.handleTextChange} 
                    placeholder="Todo text">
                    </input>
                    <button onClick={this.addTodo}>Add</button>
                </div>

                <div className="bg">
                    <ul>
                        {this.state.todos.map((text) => <li>{text}</li>)}
                    </ul>
                </div>
            </div>
          );
    }
addTodo = () => {
    console.log(this.state.todoText);
     var list = this.state.todos;
     list.push(this.state.todoText);
     this.setState({todos: list, todoText: ""});
}
handleTextChange = (event) => {
    this.setState({ todoText: event.target.value });
    }

    







}

export default Todo;