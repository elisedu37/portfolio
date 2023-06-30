// Hooks
import { useState } from 'react';
// Composants
import Breadcrumb from '../components/Breadcrumb';
import Categories from '../components/Categories';
// Datas
import { projects } from '../data/projects';

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

            <section id='projects' className='flex flex-col gap-8'>
                <Categories
                    categories={categories}
                    setActiveCategory={setActiveCategory}
                    activeCategory={activeCategory}
                />

                <div className='flex flex-col flex-wrap w-full max-w-full gap-8'>
                    {visibledProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`flex flex-col md:flex-row gap-8 ${
                                index % 2 === 1 ? 'md:flex-row-reverse' : ''
                            }`}
                        >
                            <div className='w-full md:w-80 h-80'>
                                <img src={project.image} alt='portfolio' className='object-cover w-full md:w-80 h-80' />
                            </div>
                            <div className='flex flex-col items-start flex-1 w-full gap-4 p-0 pt-6 bg-white'>
                                <h2>{project.title}</h2>
                                <div className='flex flex-col gap-4 px-12 py-4'>
                                    <p>{project.description}</p>
                                    <button className='px-4 py-2 bg-orange-200 rounded w-fit'>Actions</button>
                                </div>
                            </div>
                        </div>
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
