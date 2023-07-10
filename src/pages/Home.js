// Composant
import CardTemplate from '../components/CardTemplate';
// Images
import designer from '../assets/illustrations/Designer.png';
import resume from '../assets/illustrations/Resume.png';

/**
 * Page d'accueil
 * @returns {JSX}
 */
const Home = () => {
    return (
        <div className='flex flex-col flex-wrap w-full gap-8 m-auto mt-8 max-w-screen-2xl'>
            <div name='home' className='w-full h-[66vh] bg-hero'>
                <div className='flex flex-col justify-center h-full gap-8 m-8'>
                    <h1 className='w-fit'>Développeuse Front-end</h1>
                    <p className='w-1/2 text-xl '>
                        Depuis 2 ans, je conçois et développe des sites internet / logiciels. <br /> Je suis spécialisée
                        dans le framework React JS.
                    </p>
                </div>
            </div>
            <CardTemplate index={0} image={resume}>
                <div className='card'>
                    <p className='font-bold'>PHOTO</p>
                </div>
                <div className='pastille'></div>
                <h2>A propos de moi</h2>
                <div className='flex flex-col gap-4 px-12 py-4 '>
                    <p className='mr-44'>
                        Passionnée par la conception et le développement de sites internet, j’ai obtenue une licence
                        professionnelle "Métiers du numérique" spécialisée en développement web en 2022.
                    </p>
                    <p className='mr-44'>
                        Je maîtrise les langages web tels que HTML, CSS, JavaScript, Tailwind, React et Twig. J'utilise
                        également des outils de conception tels que Figma pour créer des interfaces utilisateur
                        intuitives et attrayantes.
                    </p>
                    <p>
                        En dehors de ma vie professionnelle, je suis toujours en train de travailler sur de nouveaux
                        projets de conception et de communication, ainsi que de motion design.
                    </p>
                    <div className='flex gap-4'>
                        <button className='px-4 py-2 bg-orange-200 rounded w-fit hover:bg-orange-300'>
                            En savoir plus sur mes compétences
                        </button>
                        <button className='px-4 py-2 bg-orange-200 rounded w-fit hover:bg-orange-300'>Mon CV</button>
                    </div>
                </div>
            </CardTemplate>
            <CardTemplate index={1} image={designer}>
                <div className='flex flex-col gap-8 lg:flex-row'>
                    <div className='flex flex-col flex-1 gap-4'>
                        <h2 className='w-fit'>3 compétences, 3 projets</h2>

                        <ol className='relative ml-12 border-l border-gray-200'>
                            <li className='mb-2 ml-4'>
                                <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white'></div>
                                <h3>Challenge “Daily UI”</h3>
                                <p>
                                    En 2022, j’ai participé au challenge "Daily UI", ce qui m'a permis d'acquérir les
                                    bases en design. A la fin de ce défi, j'ai continué à créer mes propres concepts
                                    d'interfaces, en réfléchissant à la fois à l'UI et à l'UX. Aujourd'hui, mes
                                    compétences en webdesign continuent de s'améliorer grâce à la pratique.
                                </p>
                            </li>
                            <li className='mb-2 ml-4'>
                                <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white'></div>
                                <h3>Ecovoito</h3>
                                <p>Ecovoito à vu le jour en 2022 à la suite d’un projet en cours de développement .</p>
                            </li>
                        </ol>
                    </div>
                    <div className='flex flex-col flex-1 gap-4'>
                        <ol className='relative mr-12 border-l border-gray-200'>
                            <li className='mb-2 ml-4'>
                                <p>
                                    Nous avons travaillé en équipe pour imaginer sur challenge pour réduire le nombre de
                                    trajet maison-travail. Nous avons principalement appris à créer des itinéraire et à
                                    calculer une distance parcouru.
                                </p>
                            </li>
                            <li className='mb-2 ml-4'>
                                <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white'></div>
                                <h3>Yuka</h3>
                                <p>
                                    En 2021, en équipe de trois, nous avons imaginé une stratégie digitale pour la
                                    version premium de Yuka. Notre travail nous a permis de mettre en pratique nos
                                    compétences en matière de design graphique, de marketing digital et de motion
                                    design.
                                </p>
                            </li>
                        </ol>
                        <button className='px-4 py-2 bg-orange-200 rounded w-fit hover:bg-orange-300'>
                            + de projets
                        </button>
                    </div>
                </div>
            </CardTemplate>
        </div>
    );
};

export default Home;

/*

   

            */
