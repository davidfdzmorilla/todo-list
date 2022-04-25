


import './Edit.css'

export const Edit = ({ item, getItems, setEdit, setList }) => {
  const titleComponent = "Editar tarea"
  const saveEdited = (e, id) => {
    e.preventDefault()
    // Conseguir el target del evento
    let target = e.target

    // Buscar el indice del objeto a actualizar
    const savedItems = getItems()
    const index = savedItems.findIndex(item => item.id === id)

    // Crear objeto con ese indice
    let item = {
      id,
      title: target.title.value,
      description: target.description.value
    }

    // Actualizar item con ese íindice
    savedItems[index] = item

    // Guardar en el storage
    localStorage.setItem('todo-list', JSON.stringify(savedItems))

    // Actualizar states
    setList(savedItems)
    setEdit(0)
  }
  return (
    <div className='edit-form'>
      <h3 className='title'>{titleComponent} : {item.title}</h3>
      <form onSubmit={e => saveEdited(e, item.id)}>
        <input type="text"
          name='title'
          className='title-edited'
          defaultValue={item.title} />
        <textarea
          name='description'
          className='description-edited'
          defaultValue={item.description} />
        <input type='submit' value='Actualizar' />
        <button onClick={() => setEdit(0)}>Cerrar</button>
      </form>
    </div>
  )
}
