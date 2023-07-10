import React from 'react';
//  Datas
import { projects } from '../data/projects';
// Navigation
import { useParams } from 'react-router';
// Composant
import Breadcrumb from '../components/Breadcrumb';
import { Cloud, Lock, SelectionInverse } from 'phosphor-react';

/**
 * Page single project
 * @returns {JSX}
 */
const ProjetDetail = () => {
    // récupère l'id présente dans le link
    let { id } = useParams();
    // on récupère les infos du projet
    const project = projects.find((project) => project.id === id);

    const features = [
        { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
        {
            name: 'Material',
            description: 'Solid walnut base with rare earth magnets and powder coated steel card cover',
        },
        { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
        { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
        { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
        { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
    ];

    return (
        <div>
            {project ? (
                <div className='flex flex-col gap-4 pt-4'>
                    <div className='flex flex-col items-center w-full gap-4'>
                        <h1>Projet : {project.title}</h1>
                        <Breadcrumb activePage={project.title} path={[{ label: 'Portfolio', path: '/projects' }]} />
                    </div>

                    <div className='flex flex-col gap-8 m-auto max-w-screen-2xl'>
                        <div className='px-6 py-24 overflow-hidde isolate sm:py-32 lg:overflow-visible lg:px-0'>
                            <div className='grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
                                <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:grid lg:w-full lg:grid-cols-2 '>
                                    <div className='lg:pr-4'>
                                        <div className='lg:max-w-2xl'>
                                            <p className='text-base font-semibold leading-7 text-indigo-600'>
                                                Deploy faster
                                            </p>
                                            <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                                                A better workflow
                                            </h1>
                                            <p className='mt-6 leading-8 text-gray-700'>{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-12 -mt-12 -ml-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
                                    <img
                                        className='w-[48rem] max-w-none  bg-gray-900 shadow-sm ring-1 ring-gray-400/10 sm:w-[57rem]'
                                        src={project.image}
                                        alt=''
                                    />
                                </div>
                                <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:grid lg:w-full lg:grid-cols-2'>
                                    <div className='lg:pr-4'>
                                        <div className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-2xl'>
                                            <p>
                                                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
                                                Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent
                                                donec est. Odio penatibus risus viverra tellus varius sit neque erat
                                                velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                                                risus enim. Mattis mauris semper sed amet vitae sed turpis id. risus
                                                enim. Mattis mauris semper sed amet vitae sed turpis id. risus enim.
                                                Mattis mauris semper sed amet vitae sed turpis id. risus enim. Mattis
                                                mauris semper sed amet vitae sed turpis id. risus enim. Mattis mauris
                                                semper sed amet vitae sed turpis id. risus enim. Mattis mauris semper
                                                sed amet vitae sed turpis id. risus enim. Mattis mauris semper sed amet
                                                vitae sed turpis id. risus enim. Mattis mauris semper sed amet vitae sed
                                                turpis id. risus enim. Mattis mauris semper sed amet vitae sed turpis
                                                id. risus enim. Mattis mauris semper sed amet vitae sed turpis id. risus
                                                enim. Mattis mauris semper sed amet vitae sed turpis id. risus enim.
                                                Mattis mauris semper sed amet vitae sed turpis id. risus enim. Mattis
                                                mauris semper sed amet vitae sed turpis id. risus enim. Mattis mauris
                                                semper sed amet vitae sed turpis id. risus enim. Mattis mauris semper
                                                sed amet vitae sed turpis id. risus enim. Mattis mauris semper sed amet
                                                vitae sed turpis id. risus enim. Mattis mauris semper sed amet vitae sed
                                                turpis id. risus enim. Mattis mauris semper sed amet vitae sed turpis
                                                id. risus enim. Mattis mauris semper sed amet vitae sed turpis id. risus
                                                enim. Mattis mauris semper sed amet vitae sed turpis id. risus enim.
                                                Mattis mauris semper sed amet vitae sed turpis id. risus enim. Mattis
                                                mauris semper sed amet vitae sed turpis id.
                                            </p>
                                            <ul role='list' className='mt-8 space-y-8 text-gray-600'>
                                                <li className='flex gap-x-3'>
                                                    <Cloud
                                                        className='flex-none w-5 h-5 mt-1 text-indigo-600'
                                                        aria-hidden='true'
                                                    />
                                                    <span>
                                                        <strong className='font-semibold text-gray-900'>
                                                            Push to deploy.
                                                        </strong>
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                        Maiores impedit perferendis suscipit eaque, iste dolor
                                                        cupiditate blanditiis ratione.
                                                    </span>
                                                </li>
                                                <li className='flex gap-x-3'>
                                                    <Lock
                                                        className='flex-none w-5 h-5 mt-1 text-indigo-600'
                                                        aria-hidden='true'
                                                    />
                                                    <span>
                                                        <strong className='font-semibold text-gray-900'>
                                                            SSL certificates.
                                                        </strong>
                                                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                                                        lorem cupidatat commodo.
                                                    </span>
                                                </li>
                                                <li className='flex gap-x-3'>
                                                    <SelectionInverse
                                                        className='flex-none w-5 h-5 mt-1 text-indigo-600'
                                                        aria-hidden='true'
                                                    />
                                                    <span>
                                                        <strong className='font-semibold text-gray-900'>
                                                            Database backups.
                                                        </strong>
                                                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                                                        Et magna sit morbi lobortis.
                                                    </span>
                                                </li>
                                            </ul>
                                            <p className='mt-8'>
                                                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id
                                                et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt
                                                ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing
                                                egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white'>
                        <div className='grid items-center max-w-2xl grid-cols-1 px-4 py-24 mx-auto gap-x-8 gap-y-16 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
                            <div>
                                <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                                    Technical Specifications
                                </h2>
                                <p className='mt-4 text-gray-500'>
                                    The walnut wood card tray is precision milled to perfectly fit a stack of Focus
                                    cards. The powder coated steel divider separates active cards from new ones, or can
                                    be used to archive important task lists.
                                </p>

                                <dl className='grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
                                    {features.map((feature) => (
                                        <div key={feature.name} className='pt-4 border-t border-gray-200'>
                                            <dt className='font-medium text-gray-900'>{feature.name}</dt>
                                            <dd className='mt-2 text-sm text-gray-500'>{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
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
