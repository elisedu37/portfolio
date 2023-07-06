// Hooks
import { useState } from 'react';
// Composants
import Breadcrumb from '../components/Breadcrumb';
import Categories from '../components/Categories';
// Datas
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('');
    const [visibleProjects, setVisibleProjects] = useState(10);

    const categories = projects.reduce(
        (acc, elem) => (acc.includes(elem.category) ? acc : acc.concat(elem.category)),
        []
    );
    const displayedProjects = projects.filter((product) => !activeCategory || activeCategory === product.category);

    const visibledProjects = displayedProjects.slice(0, visibleProjects);

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
                        <ProjectCard key={index} project={project} index={index} />
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
