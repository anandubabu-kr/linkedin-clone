import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login.js';
import Home from './Components/Home';
import Header from './Components/Header';
function App() {
  return (
    <div class="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/home' element={<Login />} />
          <Route exact path='/' element={
            <>
              <Header />
              <Home />
            </>
          } />


        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
