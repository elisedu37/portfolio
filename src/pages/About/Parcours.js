// Composants
import Breadcrumb from '../../components/Breadcrumb';
import { Tabs } from '../../components/Tabs';
// Datas
import { parcours } from '../../data/parcours';

/**
 * Page qui présente mon parcours
 * @returns {JSX}
 */
const Parcours = () => {
    return (
        <div className='flex flex-col gap-4 pt-4'>
            <div className='flex flex-col items-center w-full gap-4'>
                <h1>Mon parcours</h1>
                <Breadcrumb activePage='Mon parcours' path={[{ label: 'A propos', path: '/about' }]} />
            </div>
            <section className='flex w-full gap-8 m-auto my-8 max-w-screen-2xl'>
                <Tabs tabs={parcours} />
            </section>
        </div>
    );
};

export default Parcours;
