// Navigation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Legacy from './pages/Legacy';
import InvalidePage from './components/InvalidePage';
// Composants
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
    const projectName = 'portfolio';

    return (
        <Router basename={`/${projectName}`}>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/legacy' element={<Legacy />} />
                <Route path='*' element={<InvalidePage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
