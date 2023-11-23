import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { HightlightPage } from './pages/HightlightPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/highlights/:highlightId" element={<HightlightPage/>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
