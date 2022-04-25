import { useState } from 'react';
import './App.css';
import { AsideBar } from './components/AsideBar';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainList } from './components/MainList';

function App() {
  const [list, setList] = useState([])
  return (
    <div className="App">
      <Header />
      <AsideBar list={list} setList={setList} />
      <MainList list={list} setList={setList} />
      <Footer />
    </div>
  );
}

export default App;
