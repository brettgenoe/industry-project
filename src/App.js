import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SchedulePage from './pages/SchedulePage/SchedulePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>

    </>
  );
}

export default App;
