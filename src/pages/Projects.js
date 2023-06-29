import Breadcrumb from '../components/Breadcrumb';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id='projects' className='body-font'>
            <Breadcrumb />

            {projects.map((project, i) => (
                <p key={i}>{project.subtitle}</p>
            ))}

            <div class='portfolio-gallery'>
                <div class='item' data-id='Branding'>
                    <a href='#'>
                        <div class='card'>
                            <div class='illustration'>
                                <img src='assets/img/Template 12.png' alt='portfolio' />
                            </div>
                            <div class='content'>
                                <h2>Zino</h2>
                                <div class='exp'>
                                    <p>
                                        Date du projet : 01/02/2022 | Classification : web Challenge "intégration web":
                                    </p>
                                    <p>
                                        1 semaine pour intégrer une maquette en HTML / CSS et créer un thème custom sur
                                        Wordpress. Le thème custom a permis d'avoir une partie administrateur et de
                                        créer facilement un site unique. Plus tard, mon intégration a été reprise et
                                        améliorer pour le site officiel de Zino.
                                    </p>
                                    <div class='actions'>
                                        <button>Visiter</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class='item' data-id='Branding'>
                    <a href='#'>
                        <div class='card invert'>
                            <div class='content'>
                                <h2>Zino</h2>
                                <div class='exp'>
                                    <p>
                                        Date du projet : 01/02/2022 | Classification : web Challenge "intégration web":
                                    </p>
                                    <p>
                                        1 semaine pour intégrer une maquette en HTML / CSS et créer un thème custom sur
                                        Wordpress. Le thème custom a permis d'avoir une partie administrateur et de
                                        créer facilement un site unique. Plus tard, mon intégration a été reprise et
                                        améliorer pour le site officiel de Zino.
                                    </p>
                                    <div class='actions'>
                                        <button>Visiter</button>
                                    </div>
                                </div>
                            </div>
                            <div class='illustration'>
                                <img src='assets/img/Template 12.png' alt='portfolio' />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
