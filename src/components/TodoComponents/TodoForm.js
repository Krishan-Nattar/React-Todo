import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
  }
  render(props) {
    return (
      <form>
        To Do Form
        <input type="text" onChange={(e)=>this.props.handleInput(e)} value={this.props.inputText} />
        <button onClick={e => this.props.handleAddClick(e)}>Add Item</button>
        <button onClick={e => this.props.handleClearClick(e)}>
          Clear Finished Items
        </button>
      </form>
    );
  }
}

export default TodoForm;
