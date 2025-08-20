import React, { useState } from 'react'

const App = () => {
  let TodoList = [
    { Travel: "Dawn Prayer", IsCompleted: false },
    { Travel: "Recite Quran", IsCompleted: true },
    { Travel: "Exercise", IsCompleted: false },
    { Travel: "BreakFast", IsCompleted: false },
    { Travel: "Shower", IsCompleted: false },
    { Travel: "Noon Prayer", IsCompleted: false },
    { Travel: "Recite Quran", IsCompleted: false },
    { Travel: "Lunch", IsCompleted: false },
    { Travel: "Nap", IsCompleted: false },
    { Travel: "Evening Prayer", IsCompleted: true },
  ]

  let [action, setAction] = useState(TodoList);

  const ChangeAction = (index) => {
    const updated = [...action];
    updated[index].IsCompleted = !updated[index].IsCompleted; // toggle true/false
    setAction(updated);
  }

  return (
    <div className='bg-black text-white min-h-screen flex justify-center items-center flex-col px-4'>
      <h1 className='text-4xl font-bold mb-6'>Daily Schedule</h1>

      {/* Table Wrapper */}
      <div className='bg-gray-900 rounded-xl shadow-lg overflow-hidden w-full max-w-3xl'>
        {/* Table Header */}
        <div className='flex bg-gray-700 font-semibold text-lg'>
          <div className='w-1/3 text-center py-3'>Task</div>
          <div className='w-1/3 text-center py-3'>Completed</div>
          <div className='w-1/3 text-center py-3'>Action</div>
        </div>

        {/* Table Rows */}
        <div className='divide-y divide-gray-600'>
          {action.map((todo, index) => (
            <div key={index} className='flex items-center'>
              {/* Task Name */}
              <div className='w-1/3 text-center py-3'>{todo.Travel}</div>

              {/* Status */}
              <div className='w-1/3 text-center py-3'>
                {todo.IsCompleted ? (
                  <span className='text-green-400 font-semibold'>Done ✅</span>
                ) : (
                  <span className='text-red-400 font-semibold'>Pending</span>
                )}
              </div>

              {/* Action Button */}
              <div className='w-1/3 text-center py-3'>
                <button
                  className={`py-1 px-5 rounded-2xl font-medium ${
                    todo.IsCompleted ? 'bg-green-600' : 'bg-red-600'
                  }`}
                  onClick={() => ChangeAction(index)}
                >
                  {todo.IsCompleted ? "Undo" : "Task Done"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
