import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path= "/profile" element = {<ProfilePage/>} />
        </Routes>


      </BrowserRouter>

    </>
  );
}

export default App;
