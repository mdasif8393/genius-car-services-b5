import logo from './logo.svg';
import './App.css';
import Footer from './pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Footer></Footer>
      <Routes>
        <Route path="/" ></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
