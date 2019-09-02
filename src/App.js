import React from "react";
import Todo from "./components/TodoComponents/Todo";
import Search from './components/Search';
import './App.css';


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
      input: "",
      search: ""
    };
  }

  handleAddClick = event => {
    event.preventDefault();

    let current = Date.now();
    let task = this.state.input;
    let completed = false;
    let newObject = {
      task: task,
      id: current,
      completed: completed
    };

    let currentData = this.state.data.slice();
    currentData.push(newObject);
    this.setState({ data: currentData });

    this.setState({ input: "" });
  };

  handleClearClick = event => {
    event.preventDefault();

    let currentData = this.state.data.slice();
    let newData = currentData.filter(item => {
      if (item.completed == false) {
        return item;
      }
    });

    this.setState({ data: newData });
  };
  handleInput = e => {
    this.setState({ input: e.target.value });
  };

  handleSearch = e =>{
    this.setState({search: e.target.value});
  }
  handleItemClick = e => {
    let clickId = e.target.dataset.id;

    let currentData = this.state.data.slice();
    let newData = currentData.map(item => {
      if (item.id != clickId) {
        return item;
      } else {
        return { ...item, completed: !item.completed };
      }
    });

    this.setState({ data: newData });
  };

  render() {
    return (
      <div className="full-app">
        <Search searchValue={this.state.search} handleSearch={this.handleSearch} />
        <h2>To do...</h2>
        <Todo
          list={this.state.data}
          handleAddClick={this.handleAddClick}
          handleClearClick={this.handleClearClick}
          inputText={this.state.input}
          handleInput={this.handleInput}
          handleItemClick={this.handleItemClick}
          searchValue={this.state.search}
        />
      </div>
    );
  }
}

export default App;
