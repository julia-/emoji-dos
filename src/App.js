import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component {
  state = {
    items: [
      { description: 'First', completed: true },
      { description: 'Second', completed: true },
      { description: 'Third', completed: false },
      { description: 'Fourth', completed: false }
    ]
  }

  // onToggleItemAtIndex = (index) => {
  //   this.setState((prevState) => {
  //     const items = prevState.items
  //     const item = items[index]
  //     item.completed = !item.completed
  //     return {
  //       items: items
  //     }
  //   })
  // }

  onToggleItemAtIndex = (index) => {
    this.setState((prevState) => {
      const beforeItems = prevState.items
      const afterItems = beforeItems.map((item, currentIndex) => {
        if (currentIndex === index) {
          // const copy = Object.assign(
          //   {}, // Start with a blank object - otherwise, the item would be changed
          //   item,
          //   { completed: !item.completed }
          // )
          // return copy
          return {
            ...item,
            completed: !item.completed
          }
        }
        else {
          return item
        }
      })

      return {
        items: afterItems
      }
    })
  }

  render() {
    const items = this.state.items

    return (
      <div className="App">
        {
          items.map((item, index) => (
            <TodoItem
              key={ index }
              description={ item.description }
              completed={ item.completed }
              onToggleCompleted={
                () => {
                  this.onToggleItemAtIndex(index)
                  console.log('TodoItem onToggleCompleted received', index);
                }
              }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
