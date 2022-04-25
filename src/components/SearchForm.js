import React from 'react'

export const SearchForm = () => {
  return (
    <section className='search-form-container'>
      <h3>Buscar</h3>
      <form>
        <label>Buscar</label>
        <input type='text' placeholder='Escribe aquí...' />
        <input type='submit' value='Buscar' />
      </form>
    </section>
  )
}
