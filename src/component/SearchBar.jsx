import React from 'react'

const SearchBar = ({search ,setSearch} ) => {
  return (
    <div className=' w-full flex justify-center my-4'>
      <input type="text"
      placeholder='Search Products.....'
      value={search} 
      onChange={(e)=> setSearch(e.target.value)} 
      className='w-1/2 p-2 border rounded-lg shadow-sm focus:outline-none'
      />
    </div>
  )
}

export default SearchBar
