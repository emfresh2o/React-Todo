// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const mychores = [
  {
    name: 'Organize Garage',
    id: 1528817077286,
    completed: false,
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
  },
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todolist: mychores,
    };
  }

  toggleItem = (clickedId) => {
    const newtodolist = this.state.todolist.map((item) => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });

    this.setState({
      todolist: newtodolist,
    });
  };

  addNewItem = (itemText) => {
    const newItem = {
      name: itemText,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todolist: [...this.state.todolist, newItem],
    });
  };
  clearCompleted = () => {
    this.setState({
      todolist: this.state.todolist.filter((item) => {
        if (item.completed === false) {
          return {};
        }
      }),
    });
  };

  render() {
    return (
      <div className='wrapper'>
        <header>
          <h1 style={{ color: 'white', paddingLeft: '20%' }}>My Daily Chores</h1>
          <TodoForm addNewItem={this.addNewItem} />
        </header>
        <TodoList
          todo={this.state.todolist}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
