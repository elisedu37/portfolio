// Composants
import { Tabs } from '../../components/Tabs';
import Breadcrumb from '../../components/Breadcrumb';
// Datas
import { experiences } from '../../data/experiences';

/**
 * Page qui présente mes expériences pro
 * @returns {JSX}
 */
const Experiences = () => {
    return (
        <div className='flex flex-col gap-4 pt-4'>
            <div className='flex flex-col items-center w-full gap-4'>
                <h1>Mes expériences</h1>
                <Breadcrumb activePage='Mes expériences' path={[{ label: 'A propos', path: '/about' }]} />
            </div>
            <section className='flex w-full gap-8 m-auto max-w-screen-2xl'>
                <Tabs tabs={experiences} />
            </section>
        </div>
    );
};

export default Experiences;
