import React from 'react'
import { data } from './data'
import { NavLink } from 'react-router-dom'

function Articles() {
  return (
    <div className='main '>
        <input className='input' type="text" 
        name=""
         id=""
         placeholder='search' />
         <div className='articles_div'>
        {
            data.map((each) => {
                return(
                   < div>
                   <NavLink to={`/articles/${each.slug}`}>{each.title}</NavLink>
                   <p>{each.author}</p>
                   
                   
                   </div>

                )
            })
        }

         </div>

    </div>
  )
}

export default Articles