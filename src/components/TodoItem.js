import React from 'react'

function TodoItem({
  description,
  completed = false // If not passed, default to 'false'
}) {
  return (
    <label>
      <input
        type='checkbox'
        checked={ completed }
        onChange={
          (event) => {
            console.log('Toggled', description);
          }
        }
      />
      { description }
    </label>
  )
}

export default TodoItem