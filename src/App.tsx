import { useContext } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './components/homepage/HomePage';
import LoginPage from './components/loginpage/LoginPage';
import Navbar from './components/navbar/Navbar';
import { myContext } from './Context';

function App() {
  const userObject = useContext(myContext);
  console.log(userObject)
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          {
            userObject ? null : (
              <Route path='/login' element={<LoginPage />} />
            )
          }
        </Routes>
    </BrowserRouter>
  );
}

export default App;
