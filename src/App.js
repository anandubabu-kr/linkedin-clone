import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Components/Login.js'; 

function App() {
  return (
   <div class="App">
     <BrowserRouter>
     <Routes>
       <Route exact path='/' element={<Login/>} />
       {/* </Routes> */}
     </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
