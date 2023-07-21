import { FigmaLogo, FileImage, GithubLogo, Planet, YoutubeLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';

/**
 * Template de carte personnalisé pour les projets
 * @param {object} project toutes les infos sur le projet
 * @param {number} index permet de savoir si l'image est a gauche ou a droite
 * @returns {JSX}
 */
const ProjectCard = ({ project, index }) => {
    return (
        <div
            className={`flex flex-col lg:flex-row gap-8 items-stretch ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
        >
            <div className='w-full m-auto overflow-hidden rounded h-96 lg:h-max lg:w-96'>
                <div className='transition-transform duration-500 ease-in-out transform h-max hover:scale-110'>
                    {project.more ? (
                        <Link to={`/project/${project.id}`}>
                            <img src={project.image} alt='' className='object-cover w-full h-max' />
                        </Link>
                    ) : (
                        <img src={project.image} alt='' className='object-cover w-full h-max' />
                    )}
                </div>
            </div>

            <div className='relative flex flex-col items-start flex-1 w-full p-0 pt-4 bg-white rounded'>
                <div className='card'>
                    <p className='font-bold'>Compétences</p>
                    {project?.skills?.map((skill, index) => {
                        return <p key={index}>{skill}</p>;
                    })}
                </div>
                <div className='pastille'></div>
                <h2>{project.title}</h2>
                <div className='flex flex-col gap-4 px-6 py-6 sm:py-4 sm:px-12 '>
                    <p className='mr-44'>
                        Date du projet : {project.date} | Classification : <strong>{project.category}</strong>
                    </p>
                    <div>{project?.content}</div>
                    <div className='flex gap-4'>
                        {project.more && (
                            <Link
                                to={`/project/${project.id}`}
                                className='px-4 py-2 bg-orange-200 rounded w-fit hover:bg-orange-300'
                            >
                                En savoir plus
                            </Link>
                        )}
                        {project?.actions?.map((action) => {
                            return (
                                <a
                                    href={action.link}
                                    className='flex items-center'
                                    key={action.id}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <span className='mr-2'>
                                        {action.icon === 'FigmaLogo' ? (
                                            <FigmaLogo />
                                        ) : action.icon === 'GitHubLogo' ? (
                                            <GithubLogo />
                                        ) : action.icon === 'YoutubeLogo' ? (
                                            <YoutubeLogo />
                                        ) : action.icon === 'Image' ? (
                                            <FileImage />
                                        ) : (
                                            <Planet />
                                        )}
                                    </span>
                                    {action.text}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
