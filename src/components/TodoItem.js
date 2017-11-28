import React from 'react'

function TodoItem({
  description,
  completed = false, // If not passed, default to 'false'
  onToggleCompleted
}) {
  return (
    <label>
      <input
        type='checkbox'
        checked={ completed }
        onChange={
          (event) => {
            console.log('Clicked checkbox', description);
            onToggleCompleted();
          }
        }
      />
      { description }
    </label>
  )
}

export default TodoItem