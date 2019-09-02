import React, { Component } from "react";
import { Input, Button } from 'semantic-ui-react'

class TodoForm extends Component {
  constructor() {
    super();
  }
  render(props) {
    return (
      <form className="todo-form">
        <Input type="text" placeholder="New Item" onChange={(e)=>this.props.handleInput(e)} value={this.props.inputText} />
        <div className="form-buttons">
        <Button primary onClick={e => this.props.handleAddClick(e)}>Add Item</Button>
        
        <Button negative onClick={e => this.props.handleClearClick(e)}>Clear Finished Items</Button>
        </div>
      </form>
    );
  }
}

export default TodoForm;
