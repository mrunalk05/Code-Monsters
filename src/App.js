import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Curriculum from './components/ciriculum';
import Cafe from './components/cafe';

function App() {
  return (
    <>
    <BrowserRouter >
    <Routes >
      <Route path='/' element={<Landing />} />
      <Route path='/ciri' element={<Curriculum />} />
      <Route path='/cafe' element={<Cafe />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
