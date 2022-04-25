

import './AsideBar.css'

export const AsideBar = () => {
  return (
    <aside>
      <section className='search-form-container'>
        <h3>Buscar</h3>
        <form>
          <label>Buscar</label>
          <input type='text' placeholder='Escribe aquí...' />
          <input type='submit' value='Buscar' />
        </form>
      </section>
      <section className='add-form-container'>
        <h3>Nueva entrada</h3>
        <form>
          <label>Título</label>
          <input type='text' placeholder='Escribe aquí...' />
          <label>Contenido</label>
          <input type='text' placeholder='Escribe aquí...' />
          <input type='submit' value='Buscar' />
        </form>
      </section>
    </aside>
  )
}
