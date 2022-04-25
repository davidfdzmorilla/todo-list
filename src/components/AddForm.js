import React, { useState } from 'react'
import { saveInStorage } from '../helpers/saveInStorage'

export const AddForm = ({ list, setList }) => {

  const [form, setForm] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    let data = e.target
    let todo = {
      id: new Date().getTime(),
      title: data.title.value,
      description: data.description.value,
      completed: false
    }

    setForm(todo)

    setList(items => {
      if (items) {
        return [...items, todo]
      } else return [todo]

    })

    saveInStorage('todo-list', todo)

  }


  return (
    <section className='add-form-container'>
      <h3>Nueva entrada</h3>
      <form onSubmit={handleSubmit}>
        <label>Título</label>
        <input
          type='text'
          name='title'
          placeholder='Escribe aquí...' />
        <label>Contenido</label>
        <input
          type='text'
          name='description'
          placeholder='Escribe aquí...' />
        <input type='submit' value='Guardar' />
      </form>
    </section>
  )
}
