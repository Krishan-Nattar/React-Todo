import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class Todo extends Component {

  render(props) {
    return (
      <div>
        <br />
        <br />
        <TodoList 
        list={this.props.list} 
        handleItemClick={this.props.handleItemClick}
        searchValue={this.props.searchValue}
        />
        <br />
        <TodoForm 
        handleAddClick={this.props.handleAddClick} 
        handleClearClick={this.props.handleClearClick} 
        inputText={this.props.inputText} 
        handleInput={this.props.handleInput} />
      </div>
    );
  }
}

export default Todo;
