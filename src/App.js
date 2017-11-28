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

  onToggleItemAtIndex = (index) => {
    console.log(index);
    this.setState((prevState) => {
      const beforeItems = prevState.items
      const afterItems = beforeItems.map((item, currentIndex) => {
        if (currentIndex === index) {
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

  filterCompletedItem = (item) => (
    item.completed === true ? item : null
  )

  filterIncompletedItem = (item) => (
    item.completed === false ? item : null
  )

  render() {
    const items = this.state.items

    const total = items.length

    let totalCompleted = 0
    let totalIncomplete = 0

    items.forEach((item) => {
      if (item.completed) {
        totalCompleted += 1
      }
      else {
        totalIncomplete += 1
      }
    })

    return (
      <div className="App">
        <dl>
          <dt>Total</dt>
          <dd>{ total }</dd>
          <dt>Total Completed</dt>
          <dd>{ totalCompleted }</dd>
          <dt>Total Incomplete</dt>
          <dd>{ totalIncomplete }</dd>
        </dl>
        <h2> Incomplete </h2>
        {
          items.map((item, index) => {
            if (this.filterIncompletedItem(item)) {
              return (
                <TodoItem
                  key={ index}
                  description={ item.description }
                  completed={ item.completed }
                  onToggleCompleted={
                    () => {
                      this.onToggleItemAtIndex(index)
                      console.log('TodoItem onToggleCompleted received', index);
                    }
                  }
                />
              )
            }
          })
        }
        <h2>Complete</h2>
        {
          items.map((item, index) => {
            if (this.filterCompletedItem(item)) {
              return (
                <TodoItem
                  key={index}
                  description={item.description}
                  completed={ item.completed}
                  onToggleCompleted={
                    () => {
                      this.onToggleItemAtIndex(index)
                      console.log('TodoItem onToggleCompleted received', item);
                    }
                  }
                />
              )
            }
          })
        }
      </div>
    );
  }
}

export default App;
