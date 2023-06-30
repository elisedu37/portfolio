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

            <section id='projects' className='body-font'>
                <Categories
                    categories={categories}
                    setActiveCategory={setActiveCategory}
                    activeCategory={activeCategory}
                />

                <div className='flex flex-col gap-4'>
                    {displayedProducts.map((project, index) => (
                        <div key={project.id} className={`flex ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                            <div className=''>
                                <img src={project.image} alt='portfolio' className='object-cover w-80 h-80' />
                            </div>
                            <div className=''>
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
