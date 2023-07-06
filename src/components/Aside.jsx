import React from 'react'
import { NavLink } from 'react-router-dom'

function Aside() {
  return (
    <div className='aside'>
        <div className='aside_div '>
            <div className='flex align'>
               <h2>👆</h2> 
               <NavLink to='/'>Home</NavLink>
            </div>
            <div className='flex align'>
               <h2>👆</h2> 
               <NavLink to='/articles'>Articles</NavLink>
            </div>
            <div className='flex align'>
               <h2>👆</h2> 
               <NavLink to='/people'>people</NavLink>
            </div>
            <div className='flex align'>
               <h2>👆</h2> 
               <NavLink to='/books'>Books</NavLink>
            </div>
            <div className='flex align'>
               <h2>👆</h2> 
               <NavLink to='/helpandsupport'>Help & Support</NavLink>
            </div>

        </div>

    </div>
  )
}

export default Aside