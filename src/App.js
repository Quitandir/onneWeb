import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaBase from './pages/PaginaBase';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route index element={<Home />} /> 
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
