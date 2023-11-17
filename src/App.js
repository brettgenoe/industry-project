import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Homepage />} />
        </Routes>

        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
