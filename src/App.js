import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import MovieDetail from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<ProfilePage />} /> */}
          <Route path="/" element={<MovieDetail />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>

    </>
  );
}

export default App;
