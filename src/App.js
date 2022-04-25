import './App.css';
import { AsideBar } from './components/AsideBar';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainList } from './components/MainList';

function App() {
  return (
    <div className="App">
      <Header />
      <AsideBar />
      <MainList />
      <Footer />
    </div>
  );
}

export default App;
