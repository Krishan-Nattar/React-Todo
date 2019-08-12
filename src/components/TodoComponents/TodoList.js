// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import "./Todo.css";

class TodoList extends React.Component {
  constructor() {
    super();
  }
  render(props) {
    return (
      <div>
        {!this.props
          ? null
          : this.props.list
              .map(item => {
                return (
                  <div
                    className={item.completed ? "line" : ""}
                    key={item.id}
                    data-id={item.id}
                    onClick={e => this.props.handleItemClick(e)}
                  >
                    {item.task}
                  </div>
                );
              })
              .filter(item => {
                if (
                  item.props.children.toLowerCase().includes(this.props.searchValue.toLowerCase()) ==
                    true ||
                  this.props.searchValue == ""
                ) {
                  return item;
                }
              })}
      </div>
    );
  }
}

export default TodoList;

// {!this.props
//     ? null
//     : this.props.list.map().filter(item => {

//       if(item.task.includes(this.props.searchValue)){
//           return (
//               <div
//                 className={item.completed ? "line" : ""}
//                 key={item.id}
//                 data-id={item.id}
//                 onClick={e => this.props.handleItemClick(e)}
//               >
//                 {item.task}
//               </div>
//             );
//       };

//       })}
