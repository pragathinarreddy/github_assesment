import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

function AnswerComp() {

    let slugFromUrl = useParams();
    let eachAns = slugFromUrl.slug
    console.log(slugFromUrl, "sssssssssssssss")
  return (
    <div className='main'>
        <NavLink to="/articles">
            Go Back to Articles...
        </NavLink>
       <h2>The answer for this slug will be :: {eachAns}</h2>
    </div>
  )
}

export default AnswerComp