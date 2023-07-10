// Navigation
import { Link } from 'react-router-dom';
// Composant
import Breadcrumb from '../components/Breadcrumb';
// Image
import code from '../assets/illustrations/Code.png';

/**
 * Page à propos
 * @returns {JSX}
 */
const About = () => {
    // les onglets que nous pouvons ouvrir
    const tabs = [
        {
            id: 'skills',
            image: code,
            title: 'Mes compétences',
        },
        {
            id: 'experiences',
            image: code,
            title: 'Mes expériences',
        },
        {
            id: 'parcours',
            image: code,
            title: 'Mon parcours',
        },
    ];

    return (
        <div className='flex flex-col gap-4 pt-4'>
            <div className='flex flex-col items-center w-full gap-4'>
                <h1>A propos</h1>
                <Breadcrumb />
            </div>

            <section className='flex w-full gap-8 m-auto h-128 max-w-screen-2xl'>
                {tabs.map((tab) => (
                    <Link
                        to={tab.id}
                        className='relative flex flex-col items-center justify-center w-1/3 h-full bg-white'
                        key={tab.id}
                    >
                        <img src={tab.image} alt={tab.title} className='object-contain h-full' />
                        <p className='absolute p-2 bg-white rounded-full'>{tab.title}</p>
                    </Link>
                ))}
            </section>
        </div>
    );
};

export default About;
