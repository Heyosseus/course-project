import React from 'react';
import edit from './Edit.module.css'

const Edit = () => {
  return (
    <div className={edit.container}>
      <h2>Edit Product</h2>
      <div className={edit.content}>
            <form action="">
                <label htmlFor="">Name:</label>
                <input type="text" />
            </form>
            <form action="">
                <label htmlFor="">Product Number:</label>
                <input type="text" />
            </form>
            <form action="">
                <label htmlFor="">Color:</label>
                <input type="text" />
            </form>
            <form action="">
                <label htmlFor="">Standard Cost:</label>
                <input type="text" />
            </form>
            <form action="">
                <label htmlFor="">Last Price:</label>
                <input type="text" />
            </form>
            <form action="">
                <label htmlFor="">Size:</label>
                <input type="text" />
            </form>
            <form action="">
                <label htmlFor="">Weight:</label>
                <input type="text" />
            </form>
            <form action="">
                <label htmlFor="">sell Start Date:</label>
                <input type='datetime-local' />
            </form>
            <div className={edit.buttons}>
                <button className='btn btn-success'>Save</button>
                <button className='btn btn-secondary'>Back to List</button>
                <button className='btn btn-danger'>Delete</button>
            </div>
      </div>
    </div>
  )
}

export default Edit
