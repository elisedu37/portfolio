import Breadcrumb from '../components/Breadcrumb';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id='projects' className='body-font'>
            <Breadcrumb />

            {projects.map((project, i) => (
                <p key={i}>{project.subtitle}</p>
            ))}

            <div className='portfolio-gallery'>
                <div className='item' data-id='Branding'>
                    <div className='card'>
                        <div className='illustration'>
                            <img src='assets/img/Template 12.png' alt='portfolio' />
                        </div>
                        <div className='content'>
                            <h2>Zino</h2>
                            <div className='exp'>
                                <p>Date du projet : 01/02/2022 | Classification : web Challenge "intégration web":</p>
                                <p>
                                    1 semaine pour intégrer une maquette en HTML / CSS et créer un thème custom sur
                                    Wordpress. Le thème custom a permis d'avoir une partie administrateur et de créer
                                    facilement un site unique. Plus tard, mon intégration a été reprise et améliorer
                                    pour le site officiel de Zino.
                                </p>
                                <div className='actions'>
                                    <button>Visiter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='item' data-id='Branding'>
                    <div className='card invert'>
                        <div className='content'>
                            <h2>Zino</h2>
                            <div className='exp'>
                                <p>Date du projet : 01/02/2022 | Classification : web Challenge "intégration web":</p>
                                <p>
                                    1 semaine pour intégrer une maquette en HTML / CSS et créer un thème custom sur
                                    Wordpress. Le thème custom a permis d'avoir une partie administrateur et de créer
                                    facilement un site unique. Plus tard, mon intégration a été reprise et améliorer
                                    pour le site officiel de Zino.
                                </p>
                                <div className='actions'>
                                    <button>Visiter</button>
                                </div>
                            </div>
                        </div>
                        <div className='illustration'>
                            <img src='assets/img/Template 12.png' alt='portfolio' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
