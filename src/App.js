import React from "react";
import Todo from "./components/TodoComponents/Todo";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      data: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ],
      input: ""
    };
  }

  handleAddClick=(event)=>{
    event.preventDefault();
    
    let current = Date.now();
    let task = this.state.input;
    let completed = false;
    let newObject = {
      task: task,
      id: current,
      completed: completed
    }

    let currentData = this.state.data.slice();
    currentData.push(newObject);

    // console.log(currentData);
    this.setState({data: currentData});
    
    
    // console.log(this.state.input, current, completed);
    this.setState({input: ""})
  }

  handleClearClick=(event)=>{
    event.preventDefault();
    console.log('clear click');
  }
  handleInput =(e)=>{
    // console.log(e.target.value)
    this.setState({input: e.target.value})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Todo 
        list={this.state.data} 
        handleAddClick={this.handleAddClick} 
        handleClearClick={this.handleClearClick} 
        inputText={this.state.input} 
        handleInput={this.handleInput} 
        />
      </div>
    );
  }
}

export default App;
