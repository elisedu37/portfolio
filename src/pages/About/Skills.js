// Composants
import Breadcrumb from '../../components/Breadcrumb';
import CardTemplate from '../../components/CardTemplate';
// Datas
import { skills } from '../../data/skills';

/**
 * Page qui présente mes compétences
 * @returns {JSX}
 */
const Skills = () => {
    return (
        <div className='flex flex-col gap-4 pt-4'>
            <div className='flex flex-col items-center w-full gap-4'>
                <h1>Mes compétences</h1>
                <Breadcrumb activePage='Mes compétences' path={[{ label: 'A propos', path: '/about' }]} />
            </div>
            <section id='projects' className='flex flex-col gap-8 m-auto my-8 max-w-screen-2xl'>
                {skills?.map((skill, index) => {
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

export default Skills;
