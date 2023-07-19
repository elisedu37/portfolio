// Package
import Typewriter from 'typewriter-effect';
// Icone
import { DownloadSimple } from 'phosphor-react';
// Images et PDF
import template from '../assets/Template-1.png';
import Pdf from '../assets/cv-elisegigot.pdf';

/**
 * Page d'accueil
 * @returns {JSX}
 */
const Home = ({ isOpen }) => {
    return (
        <div className='flex flex-col flex-wrap w-full gap-8 m-auto mt-8 max-w-screen-2xl'>
            <div className='flex flex-col items-center py-4 md:flex-row'>
                <div className='flex flex-col justify-center w-full h-full gap-8 md:w-2/5'>
                    {!isOpen && (
                        <h1 className={`flex gap-4 w-fit`}>
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
                    )}
                    <div className='flex flex-col gap-2'>
                        <p className='text-xl'>
                            Conceptrice et développeuse de logiciels et de sites internet depuis 2 ans, je suis
                            spécialisé dans le framework React JS.
                        </p>
                        <p className='text-xl'>
                            Vous pouvez découvrir mes créations et consulter mon CV pour en savoir plus sur mon
                            parcours.
                        </p>
                    </div>
                    <div className='flex gap-4'>
                        <button className='px-4 py-2 bg-orange-200 rounded w-fit hover:bg-orange-300'>
                            Mon portfolio
                        </button>

                        <a href={Pdf} className='flex items-center'>
                            <span className='mr-2'>
                                <DownloadSimple />
                            </span>
                            Télécharger mon CV
                        </a>
                    </div>
                </div>
                <div id='pattern' className='flex flex-col justify-center w-full bg-no-repeat bg-contain md:w-3/5'>
                    <img src={template} alt='home' />
                </div>
            </div>
        </div>
    );
};

export default Home;

/*
<dl className='grid grid-cols-1 my-8 mt-16 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-16 lg:gap-x-8'>
    {listItems.map((item, index) => (
        <div key={index} className='pt-4 border-t border-gray-200'>
            <dt className='font-medium text-gray-900'>{item.term}</dt>
            <dd className='mt-2 text-sm text-gray-500'>{item.description}</dd>
        </div>
    ))}
</dl>
*/
