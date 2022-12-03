import React from 'react'
import show from './ShowFilter.module.css'

const ShowFilter = () => {
  return (
      <div className={show.container}>
          <form action="">
              <label htmlFor="">Name:</label>
              <input type="text" className={show.input} id={ show.first} />
              <label htmlFor="">and Price between:</label>
              <input type="text" className={show.input}/>
              <label htmlFor="">and </label>
              <input type="text" className={show.input}/>
          </form>
          <button className='btn btn-light border' id={show.btn}>Apply</button>
    </div>
  )
}

export default ShowFilter