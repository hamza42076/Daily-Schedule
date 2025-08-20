import React from 'react'

const Item = (props) => {
  return (
    <div className="flex text-center items-center">
      {/* City */}
      <div className="w-1/3 py-3 text-white font-medium">
        {props.Travel}
      </div>

      {/* Status */}
      <div className={`w-1/3 py-3 font-medium ${props.IsCompleted === "true" ? "bg-green-500 text-black" : "bg-red-500 text-white"}`}>
        {props.IsCompleted}
      </div>
      
    </div>
  )
}

export default Item
