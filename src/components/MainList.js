
import { useEffect } from 'react'
import { CardTodoItem } from './CardTodoItem'
import './MainList.css'

export const MainList = ({ list, setList }) => {
  console.log(list)

  useEffect(() => {
    // Cargamos componente de listado por primera vez
    getItems()
  }, [])

  const getItems = () => {
    // Recogemos items del localStorage
    let todos = JSON.parse(localStorage.getItem("todo-list"))
    setList(todos)
    return todos
  }

  return (
    <main>
      <h2>Lista de tareas</h2>
      <section className='list-container'>
        {list ? list.map((item) => {
          return <CardTodoItem
            key={item.id}
            getItems={getItems}
            setList={setList}
            item={item} />
        }) : <h3>No hay tareas</h3>}
      </section>
    </main>
  )
}
