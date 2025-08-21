import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <h1 className="text-xl font-bold cursor-pointer">PortFolio</h1>

        {/* Menu Items */}
        <ul className="hidden md:flex gap-10">
          {["Home", "About", "Product", "Contact"].map((item, idx) => (
            <li 
              key={idx} 
              className="list-none relative cursor-pointer 
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:h-[2px] after:w-0 after:bg-white 
              after:transition-all after:duration-300 
              hover:after:w-full"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-2xl focus:outline-none">
          <i className="ri-menu-2-line"></i>
        </button>
      </div>
    </div>
  )
}

export default Navbar
