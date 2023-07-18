// Datas
import { DownloadSimple } from 'phosphor-react';
import { listItems } from '../data/hero';
import Typewriter from 'typewriter-effect';
import template from '../assets/Template-1.png';

/**
 * Page d'accueil
 * @returns {JSX}
 */
const Home = () => {
    return (
        <div className='flex flex-col flex-wrap w-full gap-8 m-auto mt-8 max-w-screen-2xl'>
            <div className='flex flex-col items-center py-4 md:flex-row'>
                <div className='flex flex-col justify-center w-full h-full gap-8 md:w-2/5'>
                    <h1 className='flex gap-4 w-fit'>
                        👉
                        <Typewriter
                            options={{ loop: true }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('FrontEnd Developer')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString('UX / UI Designer')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .start();
                            }}
                        />
                    </h1>
                    <p className='text-xl'>
                        Depuis 2 ans, je conçois et développe des sites internet / logiciels. <br /> Je suis spécialisée
                        dans le framework React JS.
                    </p>
                    <p className='text-xl'>Venez découvrir : </p>
                    <div className='flex gap-4'>
                        <button className='px-4 py-2 bg-orange-200 rounded w-fit hover:bg-orange-300'>
                            mes créations
                        </button>

                        <a href='#' className='flex items-center'>
                            <span className='mr-2'>
                                <DownloadSimple />
                            </span>
                            mon CV
                        </a>
                    </div>
                </div>
                <div id='pattern' className='flex flex-col justify-center w-full bg-no-repeat bg-contain md:w-3/5'>
                    <img src={template} />
                </div>
            </div>
            <dl className='grid grid-cols-1 my-8 mt-16 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-16 lg:gap-x-8'>
                {listItems.map((item, index) => (
                    <div key={index} className='pt-4 border-t border-gray-200'>
                        <dt className='font-medium text-gray-900'>{item.term}</dt>
                        <dd className='mt-2 text-sm text-gray-500'>{item.description}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
};

export default Home;
