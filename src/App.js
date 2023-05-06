import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Curriculum from './components/ciriculum';
import Cafe from './components/cafe';
import Acm from './components/acm';
import NonCurriculum from './components/non-ciri';

function App() {
  return (
    <>
    <BrowserRouter >
    <Routes >
      <Route path='/' element={<Landing />} />
      <Route path='/ciri' element={<Curriculum />} />
      <Route path='/cafe' element={<Cafe />} />
      <Route path='/acm' element={<Acm />} />
      <Route path='/non-ciri' element={<NonCurriculum />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
