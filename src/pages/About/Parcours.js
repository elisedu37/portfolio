// Composants
import Breadcrumb from '../../components/Breadcrumb';
import CardTemplate from '../../components/CardTemplate';
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
            <section id='projects' className='flex flex-col gap-8 m-auto max-w-screen-2xl'>
                {parcours?.map((skill, index) => {
                    return (
                        <CardTemplate index={index} key={skill.id} image={skill.image}>
                            <h2>{skill.title}</h2>
                            <div className='flex flex-col gap-4 px-12 py-4 '>
                                {skill?.content}
                                <p>{skill.techno}</p>
                            </div>
                        </CardTemplate>
                    );
                })}
            </section>
        </div>
    );
};

export default Parcours;
