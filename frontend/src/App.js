import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Portal from './Components/Portal';
import Login from './Components/Login';
import MainPage from './Components/MainPage';
import Signup from './Components/Signup';
import Feedback from './Components/Feedback';
import Attendance from './Components/Attendance';
import Grading from './Components/Grading';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<MainPage/>}/>
      <Route path='/portal' element={<Portal/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/portal' element={<Portal/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/attendance' element={<Attendance/>}/>
      <Route path='/grading' element={<Grading/>}/>
    </Routes>
    </BrowserRouter>
  

    </>
    );
}

export default App;
