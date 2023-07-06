import React from 'react'
import { books } from './booklyData'

console.log(books)

function Books() {
  return (
    <div className='main '>
        <input className='book_input' type="text" 
        placeholder='serach'/>
        <div className='flex flex_wrap'>
        {
            books.map((each) => {
                return(
                    <div className='book_card '>
                        <center>
                        <img className='book_image' src={each.image} alt="image" />
                        <h2>{each.title}</h2>
                        <button className='book_button'>Buy Now</button>
                            
                        </center>
                    </div>
                )
            })
        }

        </div>
    </div>
  )
}

export default Books