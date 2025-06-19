import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-slate-900 text-white py-2">
        <div className="logo">
             <span className="font-bold text-2xl mx-8 transition-all duration-200 hover:text-black cursor-pointer">iTask</span>
        </div>
        <ul className="flex gap-8 mx-9 text-xl">
            <li className="cursor-pointer hover:font-bold hover:text-black transition-all duration-200 "> Home</li>
            <li className="cursor-pointer hover:font-bold hover:text-black transition:all duration-200" > Your Todos</li>
        </ul>
    </nav>
  )
}

export default Navbar
