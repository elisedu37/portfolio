import CardTemplate from '../components/CardTemplate';
import designer from '../assets/illustrations/Designer.png';
import resume from '../assets/illustrations/Resume.png';

const Home = () => {
    return (
        <div className='flex flex-col flex-wrap w-full gap-8 m-auto mt-8 max-w-screen-2xl'>
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
                <h2>3 compétences, 3 projets</h2>
                <>
                    <h3>Challenge “Daily UI”</h3>
                    <p>
                        En 2022, j’ai participé au challenge "Daily UI", ce qui m'a permis d'acquérir les bases en
                        design. A la fin de ce défi, j'ai continué à créer mes propres concepts d'interfaces, en
                        réfléchissant à la fois à l'UI et à l'UX. Aujourd'hui, mes compétences en webdesign continuent
                        de s'améliorer grâce à la pratique.
                    </p>
                </>
                <>
                    <h3>Ecovoito</h3>
                    <p>
                        Ecovoito à vu le jour en 2022 à la suite d’un projet en cours de développement . Nous avons
                        travaillé en équipe pour imaginer sur challenge pour réduire le nombre de trajet maison-travail.
                        Nous avons principalement appris à créer des itinéraire et à calculer une distance parcouru.
                    </p>
                </>
                <>
                    <h3>Yuka</h3>
                    <p>
                        En 2021, en équipe de trois, nous avons imaginé une stratégie digitale pour la version premium
                        de Yuka. Notre travail nous a permis de mettre en pratique nos compétences en matière de design
                        graphique, de marketing digital et de motion design.
                    </p>
                </>
            </CardTemplate>
        </div>
    );
};

export default Home;
