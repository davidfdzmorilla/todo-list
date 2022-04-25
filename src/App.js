import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>TODO List</h1>
      </header>
      <aside>
        <section>
          <h3>Buscar</h3>
          <form>
            <label>Buscar</label>
            <input type='text' placeholder='Escribe aquí...' />
            <input type='submit' value='Buscar' />
          </form>
        </section>
        <section>
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
      <main>
        <h2>Lista de tareas</h2>
        <section>
          <article>
            <h3>Titulo</h3>
            <p>Esta es la descripción del item del todo list, donde va el contenido del mismo.</p>
          </article>
        </section>
      </main>
      <footer>davidfdzmorilla</footer>
    </div>
  );
}

export default App;
