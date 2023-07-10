// Hooks
import { useState } from 'react';
// Composants
import Breadcrumb from '../components/Breadcrumb';
import Categories from '../components/Categories';
import ProjectCard from '../components/ProjectCard';
// Datas
import { projects } from '../data/projects';

/**
 * Page qui présente l'ensemble des projets
 * @returns {JSX}
 */
const Projects = () => {
    // catégorie active pour le filtre
    const [activeCategory, setActiveCategory] = useState('');
    // nombre de projets visibles
    const [visibleProjects, setVisibleProjects] = useState(10);

    // faire un tableau de toutes les catégories présentent
    const categories = projects.reduce(
        (acc, elem) => (acc.includes(elem.category) ? acc : acc.concat(elem.category)),
        []
    );

    // Filtrer les projets selon la catégorie active
    const displayedProjects = projects.filter((product) => !activeCategory || activeCategory === product.category);

    // Tableau des projets en fonction des projets à afficher
    const visibledProjects = displayedProjects.slice(0, visibleProjects);

    // bouton afficher plus
    function handleLoadMore() {
        setTimeout(() => {
            setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 10);
        }, 200);
    }

    return (
        <div className='flex flex-col gap-4 pt-4'>
            <div className='flex flex-col items-center w-full gap-4'>
                <h1>Portfolio</h1>
                <Breadcrumb />
            </div>

            <section id='projects' className='flex flex-col gap-8 m-auto max-w-screen-2xl'>
                <Categories
                    categories={categories}
                    setActiveCategory={setActiveCategory}
                    activeCategory={activeCategory}
                />

                <div className='flex flex-col flex-wrap w-full max-w-full gap-8'>
                    {visibledProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}

                    {visibleProjects < displayedProjects.length && (
                        <div className='load-more'>
                            <button onClick={handleLoadMore}>Afficher plus</button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Projects;
