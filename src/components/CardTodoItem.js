
import { useState } from 'react'
import './CardTodoItem.css'
import { Edit } from './Edit'

export const CardTodoItem = ({ item, getItems, setList }) => {

  const [edit, setEdit] = useState(0)

  const { title, description, id, completed } = item

  const deleteItem = id => {
    // Conseguir items almacenadas
    let savedItems = getItems()

    // Filtrar para borrar la que quiero
    let newItemsList = savedItems.filter(item => item.id !== parseInt(id))

    // Actualizar state del listado
    setList(newItemsList)
    // Actualizar datos en storage
    localStorage.setItem('todo-list', JSON.stringify(newItemsList))
  }

  const completedItem = id => {
    const savedItems = getItems()
    const index = savedItems.findIndex(item => item.id === id)

    let item = {
      id,
      title,
      description,
      completed: !completed
    }

    savedItems[index] = item

    // Guardar en el storage
    localStorage.setItem('todo-list', JSON.stringify(savedItems))

    // Actualizar states
    setList(savedItems)

  }

  return (
    <article className='card-todo-item'>
      <div className='data-item'>
        <h3>{title}</h3>
        <p>Descripción:</p>
        <span>{description}</span>
      </div>

      <div className='buttons-container'>
        <button className={completed === true ? 'completed' : 'no-completed'}
          onClick={() => completedItem(id)}
        >{item.completed === true ? 'Completado' : 'Pendiente'}</button>
        {edit === 0 &&
          <>
            <button className="edit"
              onClick={() => setEdit(id)}
            >Editar</button>
            <button className="delete"
              onClick={() => deleteItem(id)}
            >Borrar</button>
          </>
        }
        {edit === item.id && (
          <Edit item={item}
            getItems={getItems}
            setEdit={setEdit}
            setList={setList}
          />
        )}
      </div>
    </article>
  )
}
