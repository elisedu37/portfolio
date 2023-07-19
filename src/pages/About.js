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
                <Breadcrumb activePage='A propos' />
            </div>

            <section className='flex flex-wrap w-full gap-8 m-auto my-8 max-w-screen-2xl'>
                {tabs.map((callout) => (
                    <div key={callout.id} className='flex-1 bg-white rounded shadow'>
                        <Link to={callout.id}>
                            <div className='p-4'>
                                <div className='relative flex justify-center h-64 overflow-hidden rounded'>
                                    <div className='w-full transition-transform duration-500 ease-in-out transform hover:scale-110'>
                                        <div className='absolute inset-0'>
                                            <img
                                                src={callout.image}
                                                alt={callout.name}
                                                className='object-cover object-center w-full h-full'
                                            />
                                        </div>
                                    </div>
                                    <div className='absolute left-0 mt-3'>
                                        <h2 className='w-fit '>{callout.name}</h2>
                                    </div>
                                </div>

                                <div className='mt-8 '>{callout.description}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default About;
