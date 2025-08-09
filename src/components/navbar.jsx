import React from 'react'
import { LiaSearchengin } from "react-icons/lia";
import { NavLink } from 'react-router-dom'

function navbar() {
  return (
    <div className='fixed top-0 w-full z-50'>
      <ul className='flex bg-black text-white gap-4 p-4 justify-between'>
        <div className="logo "><img src="./src/assets/image.png" alt="Nothing" className='h-10 p-0 rounded-full cursor-pointer' /></div>
        <div>
        </div>
        <div className='flex gap-5'>
          <input type="text" className='bg-gray-700 rounded-lg px-1 h-6 m-auto ' placeholder='Search' />
          <li className='p-2 cursor-pointer hover:text-xl'><LiaSearchengin size={25} /></li>
          <li className=' hover:bg-slate-800 rounded-lg p-1 cursor-pointer hover:font-bold m-auto'><NavLink to="/">Home</NavLink></li>
          <li className=' hover:bg-slate-800 rounded-lg p-1 cursor-pointer hover:font-bold m-auto'><NavLink to="/model">You are?</NavLink></li>
          <li className=' hover:bg-slate-800 rounded-lg p-1 cursor-pointer hover:font-bold m-auto'><NavLink to="/Contact">Contact</NavLink></li>
          <li className=' hover:bg-slate-800 rounded-lg p-1 cursor-pointer hover:font-bold m-auto'><NavLink to="/About">About</NavLink></li>
        </div>

      </ul>
    </div>
  )
}

export default navbar
