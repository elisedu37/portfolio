import Breadcrumb from '../components/Breadcrumb';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id='projects' className='body-font'>
            <Breadcrumb />
            <div className='flex flex-col gap-4'>
                {projects.map((project) => (
                    <div key={project.id} className='flex'>
                        <div className=''>
                            <img src={project.image} alt='portfolio' />
                        </div>
                        <div className=''>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
