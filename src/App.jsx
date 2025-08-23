import React, { useState } from 'react'

const App = () => {
  let TodoList = [
    { task: "Dawn Prayer", IsCompleted: false },
    { task: "Recite Quran", IsCompleted: false },
    { task: "Exercise", IsCompleted: false },
    { task: "BreakFast", IsCompleted: false },
    { task: "Shower", IsCompleted: false },
    { task: "Noon Prayer", IsCompleted: false },
    { task: "Recite Quran", IsCompleted: false },
    { task: "Lunch", IsCompleted: false },
    { task: "Nap", IsCompleted: false },
    { task: "Evening Prayer", IsCompleted: false },
  ]

  let [action, setAction] = useState(TodoList);

  const ChangeAction = (index) => {
    const updated = [...action];
    updated[index].IsCompleted = !updated[index].IsCompleted; 
    setAction(updated);
  }

  return (
    <div className='bg-black text-white min-h-screen flex justify-center items-center flex-col px-4'>
      <h1 className='text-4xl font-bold mb-6'>Daily Schedule</h1>

      {/* Table Wrapper */}
      <div className='bg-gray-900 rounded-xl shadow-lg overflow-x-auto w-full max-w-3xl'>
        
        {/* Table Header */}
        <div className='flex bg-gray-700 font-semibold text-lg'>
          <div className='w-1/3 text-center py-3'>Task</div>
          <div className='w-1/3 text-center py-3'>Completed</div>
          <div className='w-1/3 text-center py-3'>Action</div>
        </div>

        {/* Table Rows */}
        <div className='divide-y divide-gray-600'>
          {action.map((todo, index) => {
            const buttonText = todo.IsCompleted ? "Undo" : "Task Done";
            const buttonClass = todo.IsCompleted ? "bg-green-600" : "bg-red-600";

            return (
              <div 
                key={index} 
                className={`flex items-center ${todo.IsCompleted ? 'bg-green-900/30' : ''}`}
              >
                {/* Task Name */}
                <div className='w-1/3 text-center py-3'>{todo.task}</div>

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
                    className={`py-1 px-5 rounded-2xl font-medium ${buttonClass}`}
                    onClick={() => ChangeAction(index)}
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App;
