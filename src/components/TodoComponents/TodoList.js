// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

class TodoList extends React.Component {
constructor(){
    super();
}
    render(props) { 

        return ( 
            <div>
                {(!this.props) ? null : this.props.list.map(item=>{
                    return <div key={item.id}>{item.task}</div>
                })}
                
            </div>
         );
    }
}
 
export default TodoList;