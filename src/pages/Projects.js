import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Categories from '../components/Categories';
import { projects } from '../data/projects';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('');
    const categories = projects.reduce(
        (acc, elem) => (acc.includes(elem.category) ? acc : acc.concat(elem.category)),
        []
    );
    const displayedProducts = projects.filter((product) => !activeCategory || activeCategory === product.category);

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col items-center w-full'>
                <h1>Portfolio</h1>
                <Breadcrumb />
            </div>

            <section id='projects' className='flex flex-col gap-4'>
                <Categories
                    categories={categories}
                    setActiveCategory={setActiveCategory}
                    activeCategory={activeCategory}
                />

                <div className='flex flex-col flex-wrap w-full max-w-full gap-4'>
                    {displayedProducts.map((project, index) => (
                        <div
                            key={project.id}
                            className={`flex flex-col md:flex-row gap-4 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className='w-full md:w-80 h-80'>
                                <img src={project.image} alt='portfolio' className='object-cover w-full md:w-80 h-80' />
                            </div>
                            <div className='flex flex-col items-start flex-1 w-full gap-4 p-0 pt-6 bg-white'>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
