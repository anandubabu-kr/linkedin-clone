import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login.js';
import Home from './Components/Home';
import Header from './Components/Header';
import ProtectedRoute from './Components/ProtectedRoutes'
import { useEffect } from 'react';
import { auth } from "./services/firebase"
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./redux/actions/actionUser";
import { useDispatch } from 'react-redux';

function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    // console.log('app loaded')
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      // console.log("Auth", currentuser);
      dispatch(setUser(currentuser));
    });
  return () => {
    unsubscribe();
  };
}, [dispatch])
return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={
          <ProtectedRoute>
            <Header />
            <Home />
          </ProtectedRoute>
        } />
        <Route exact path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </div >
);
}

export default App;


const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1>
        404 buddy
      </h1>
    </div>
  )
}

