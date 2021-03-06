import React, { Component } from 'react';
import Todo from './components/Todo'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'meeting with boss',
        completed: true
      }
    ]
  }

  markComplete =(id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  render() {
    return (
      <div className="App">
        <Todo todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
