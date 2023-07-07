import Breadcrumb from '../components/Breadcrumb';

const About = () => {
    return (
        <div className='flex flex-col gap-4 pt-4'>
            <div className='flex flex-col items-center w-full gap-4'>
                <h1>A propos</h1>
                <Breadcrumb />
            </div>
        </div>
    );
};

export default About;
