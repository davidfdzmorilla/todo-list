import { saveInStorage } from '../helpers/saveInStorage'

import './AddForm.css'

export const AddForm = ({ list, setList }) => {


  const handleSubmit = e => {
    e.preventDefault()
    let data = e.target
    let todo = {
      id: new Date().getTime(),
      title: data.title.value,
      description: data.description.value,
      completed: false
    }


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
          minLength='4'
          maxLength='20'
          type='text'
          name='title'
          required
          placeholder='Escribe aquí...' />
        <label>Descripción</label>
        <textarea
          minLength='8'
          maxLength='150'
          type='text'
          name='description'
          required
          placeholder='Escribe aquí...' />
        <input type='submit' value='Guardar' />
      </form>
    </section>
  )
}
