
import { CardTodoItem } from './CardTodoItem'
import './MainList.css'

export const MainList = () => {
  return (
    <main>
      <h2>Lista de tareas</h2>
      <section className='list-container'>
        <CardTodoItem />
      </section>
    </main>
  )
}
