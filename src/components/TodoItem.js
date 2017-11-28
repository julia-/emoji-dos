import React from 'react'

function TodoItem({
  description,
  completed = false, // If not passed, default to 'false'
  onToggleCompleted
}) {
  return (
    <label>
      <button
        role='checkbox'
        onClick={
          (event) => {
            console.log('Clicked checkbox', description);
            onToggleCompleted();
          }
        }
      >
        { completed ? '❎' : '✅' }
      </button>
      { description }
    </label>
  )
}

export default TodoItem