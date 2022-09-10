import logo from './logo.svg';
import './App.css';
import Footer from './pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
