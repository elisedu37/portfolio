// Navigation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
// Composant
import NavBar from './components/NavBar';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='*' element={<p>Erreur</p>} />
            </Routes>
        </Router>
    );
}

export default App;
