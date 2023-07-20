// Navigation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Legacy from './pages/Legacy';
import InvalidePage from './pages/InvalidePage';
// Composants
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Skills from './pages/About/Skills';
import Experiences from './pages/About/Experiences';
import Parcours from './pages/About/Parcours';
import ProjetDetail from './pages/ProjectDetails';
import { useState } from 'react';

function App() {
    // base de l'url
    const projectName = 'portfolio';

    // gère l'ouverture et la fermeture du menu
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Router basename={`/${projectName}`}>
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Routes>
                <Route path='/' element={<Home isOpen={isOpen} />} />
                <Route path='/about' element={<About />} />
                <Route path='/about'>
                    <Route path='skills' element={<Skills />} />
                    <Route path='parcours' element={<Parcours />} />
                    <Route path='experiences' element={<Experiences />} />
                </Route>
                <Route path='/projects' element={<Projects />} />
                <Route path='/project/:id' element={<ProjetDetail />} />
                <Route path='/legacy' element={<Legacy />} />
                <Route path='*' element={<InvalidePage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
