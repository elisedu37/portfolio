import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const About = () => {
    const tabs = [
        {
            id: 'skills',
            title: 'Mes compétences',
        },
        {
            id: 'experiences',
            title: 'Mes expériences',
        },
        {
            id: 'parcours',
            title: 'Mon parcours',
        },
    ];
    return (
        <div className='flex flex-col gap-4 pt-4'>
            <div className='flex flex-col items-center w-full gap-4'>
                <h1>A propos</h1>
                <Breadcrumb />
            </div>

            <section className='flex w-full gap-8 m-auto h-96 max-w-screen-2xl'>
                {tabs.map((tab) => (
                    <Link to={tab.id} className='flex w-1/3 h-full bg-white font-dancing' key={tab.id}>
                        <p>{tab.title}</p>
                    </Link>
                ))}
            </section>
        </div>
    );
};

export default About;
