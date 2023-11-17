import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import usersData from "./data/userData.json"
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SchedulePage from './pages/SchedulePage/SchedulePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/details" element={<MovieDetailsPage />} />

        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>

    </>
  );
}

export default App;
