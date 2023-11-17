import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewstudent from './components/Viewstudent';
import Addstudent from './components/Addstudent';
import Searchstudent from './components/Searchstudent';
import Deletestudent from './components/Deletestudent';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='view' element={<Viewstudent/>}/>
        <Route path='' element={<Addstudent/>}/>
        <Route path='search' element={<Searchstudent/>}/>
        <Route path='delete' element={<Deletestudent/>}/>



      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
