import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomePage from './routes/Homepage/HomePage';
import Login from './routes/Login/Login';
import SignUp from './routes/SignUp/SignUp';
import UploadFile from './routes/UploadFile/UploadFile';
import GetFiles from './routes/GetFiles/GetFiles';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/upload' element={<UploadFile/>}/>
          <Route path='/getfiles' element={<GetFiles/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
