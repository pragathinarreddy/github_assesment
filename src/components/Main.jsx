import React from 'react'
import { NavLink } from 'react-router-dom'


function Main() {
  return (
    <div className='mains main'>
        <div className='main_div'>
            <h2>🚀 Welcome to the Home page!</h2>
            <div>
                <div>
                    <NavLink className='page' to ='/articles'>ARTICLES PAGE</NavLink>
                    <NavLink  className='page' to ='/people'>PEOPLE PAGE</NavLink>
                    <NavLink  className='page' to ='books'>BOOKS PAGE</NavLink>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Main