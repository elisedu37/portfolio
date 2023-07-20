// Package
import Typewriter from 'typewriter-effect';
// Icone
import { DownloadSimple } from 'phosphor-react';
// Images et PDF
import home from '../assets/home.png';
import Pdf from '../assets/cv-elisegigot.pdf';
import { Link } from 'react-router-dom';

/**
 * Page d'accueil
 * @param {boolean} isOpen le menu est ouvert ou fermé
 * @returns {JSX}
 */
const Home = ({ isOpen }) => {
    return (
        <div className='flex flex-row flex-wrap w-full gap-8 m-auto mt-8 md:flex-col max-w-screen-2xl'>
            <div className='flex flex-col items-center md:flex-row'>
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
                        <p className='sm:text-xl'>
                            Conceptrice et développeuse de sites internet depuis 2 ans, je suis spécialisé dans le
                            framework React JS.
                        </p>
                        <p className='sm:text-xl'>
                            Vous pouvez découvrir mes créations et consulter mon CV pour en savoir plus sur mon
                            parcours.
                        </p>
                    </div>
                    <div className='flex gap-4'>
                        <Link
                            to='/projects'
                            className='px-4 py-2 text-sm bg-orange-200 rounded w-fit hover:bg-orange-300 sm:text-base'
                        >
                            Mon portfolio
                        </Link>

                        <a href={Pdf} className='flex items-center text-sm sm:text-base'>
                            <span className='mr-2'>
                                <DownloadSimple />
                            </span>
                            Télécharger mon CV
                        </a>
                    </div>
                </div>
                <div id='pattern' className='flex flex-col justify-center w-full bg-no-repeat bg-contain md:w-3/5'>
                    <img src={home} alt='home' />
                </div>
            </div>
        </div>
    );
};

export default Home;
