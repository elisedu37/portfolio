import React from 'react';
//  Datas
import { projects } from '../data/projects';
// Navigation
import { useParams } from 'react-router';
// Composant
import Breadcrumb from '../components/Breadcrumb';

/**
 * Page single project
 * @returns {JSX}
 */
const ProjetDetail = () => {
    // récupère l'id présente dans le link
    let { id } = useParams();
    // on récupère les infos du projet
    const project = projects.find((project) => project.id === id);

    return (
        <div>
            {project ? (
                <div className='flex flex-col gap-8 pt-4'>
                    <div className='flex flex-col items-center w-full gap-4'>
                        <h1>Projet : {project.title}</h1>
                        <Breadcrumb activePage={project.title} path={[{ label: 'Portfolio', path: '/projects' }]} />
                    </div>

                    <div className='flex flex-col gap-8 m-auto xl:flex-row max-w-screen-2xl lg:items-start'>
                        <div className='flex-1 lg:max-w-2xl'>{project.singleProjectContent}</div>
                        <div className='flex-1 lg:sticky lg:top-4 lg:overflow-hidden'>
                            {project.singleImg ? (
                                <img
                                    className='w-3/4 max-w-none  bg-gray-900 shadow-sm ring-1 ring-gray-400/10 sm:w-[57rem]'
                                    src={project.image}
                                    alt=''
                                />
                            ) : (
                                <div className='grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8'>
                                    <img
                                        src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg'
                                        alt='Walnut card tray with white powder coated steel divider and 3 punchout holes.'
                                        className='bg-gray-100 rounded-lg'
                                    />
                                    <img
                                        src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg'
                                        alt='Top down view of walnut card tray with embedded magnets and card groove.'
                                        className='bg-gray-100 rounded-lg'
                                    />
                                    <img
                                        src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg'
                                        alt='Side of walnut card tray with card groove and recessed card area.'
                                        className='bg-gray-100 rounded-lg'
                                    />
                                    <img
                                        src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg'
                                        alt='Walnut card tray filled with cards and card angled in dedicated groove.'
                                        className='bg-gray-100 rounded-lg'
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <>Pas de projets</>
            )}
        </div>
    );
};

export default ProjetDetail;
