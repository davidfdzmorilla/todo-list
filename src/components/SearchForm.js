import { useEffect, useState } from 'react'

import './SearchForm.css'

export const SearchForm = ({ setList }) => {
  const [text, setText] = useState('')
  const [isCompleted, setIsCompleted] = useState(null)

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("todo-list"))
    todos && setList(todos.filter(item => (item.title.includes(text) || item.description.includes(text))))
  }, [text, setList])
  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("todo-list"))
    todos && isCompleted !== null ? setList(todos.filter(item => (item.completed === isCompleted))) : setList(todos)
  }, [isCompleted, setList])


  return (
    <section className='search-form-container'>
      <h3>Buscar</h3>
      <div className='search-form'>
        <input type='text'
          onChange={e => setText(e.target.value)}
          name='text'
          placeholder='Escribe aquí...' />
        <button
          className={isCompleted === false ? 'active' : ''}
          onClick={
            () => setIsCompleted(false)
          }>Pendientes
        </button>
        <button
          className={isCompleted ? 'active' : ''}
          onClick={
            () => setIsCompleted(true)
          }>Completadas
        </button>
        <button
          className={isCompleted === null ? 'active' : ''}
          onClick={
            () => setIsCompleted(null)
          }>Todas
        </button>
      </div>
    </section>
  )
}
