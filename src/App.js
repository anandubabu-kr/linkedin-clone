import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login.js';
import Home from './Components/Home';
import Header from './Components/Header';
import ProtectedRoute from './Components/ProtectedRoutes'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login  />} />
          <Route exact path='/' element={
            <ProtectedRoute>
              <Header />
              <Home />
            </ProtectedRoute>
          } />
          <Route exact path='*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;


const ErrorPage=()=>{
  return(
    <div>
      <h1>
        404 buddy
      </h1>
    </div>
  )
}