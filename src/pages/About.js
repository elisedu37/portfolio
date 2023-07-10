// Navigation
import { Link } from 'react-router-dom';
// Composant
import Breadcrumb from '../components/Breadcrumb';
// Datas
import { tabs } from '../data/about';

/**
 * Page à propos
 * @returns {JSX}
 */
const About = () => {
    return (
        <div className='flex flex-col gap-4 pt-4'>
            <div className='flex flex-col items-center w-full gap-4'>
                <h1>A propos</h1>
                <Breadcrumb />
            </div>

            <section className='flex w-full gap-8 m-auto h-128 max-w-screen-2xl'>
                <div className='w-full'>
                    <div className='y-16 sm:py-24'>
                        <div className='space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
                            {tabs.map((callout) => (
                                <Link to={callout.id} key={callout.id}>
                                    <div className='relative group'>
                                        <div className='relative w-full overflow-hidden bg-white rounded-sm h-80 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64'>
                                            <img
                                                src={callout.image}
                                                alt={callout.description}
                                                className='object-cover object-center w-full h-full'
                                            />
                                        </div>
                                        <p className='mt-3 text-base font-semibold text-gray-900'>
                                            {callout.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
