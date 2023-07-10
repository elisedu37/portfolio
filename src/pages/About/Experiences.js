// Composants
import { Tabs } from '../../components/Tabs';
import Breadcrumb from '../../components/Breadcrumb';

/**
 * Page qui présente mes expériences pro
 * @returns {JSX}
 */
const Experiences = () => {
    // contenu à afficher
    const tabs = [
        {
            title: 'CDI - Logipro',
            content: [
                'Spt 2022 - aujourd’hui - Développement de logiciels e-learning',
                'Je travaille sur le développement de deux logiciels : Agora Learning et Crea Learning. Cette suite de logiciels permet la création et la diffusion de modules e-learning.',
                "Au sein de l'équipe, je m’occupe du développement front-end et du maquettage des nouvelles fonctionnalités.",
                'Pour Créa Learning, nous sommes en train de faire une refonte de l’ensemble du logiciel avec React JS et Symfony. J’ai pu travailler sur l’éditeur de module avec l’implémentation des différents blocs disponibles. ',
                'En parallèle, sur Agora Learning, le travail consiste à ajouter de nouvelles fonctionnalités. Pour ma part, j’effectue des modifications sur les templates Twig et le JavaScript car ce projet est entièrement développé sous Symfony.',
                'En plus des nouvelles features, l’espace apprenant est en train d’être refondu. Je me suis occupé de faire l’ensemble des wireframes et des premières maquettes. Ce travail m’a permis d’apporter des idées pour améliorer le logiciel et l’expérience utilisateur.',
                'Au niveau de la gestion de projet, nous utilisons la méthode agile SCRUM et le versionnage de notre code avec GitLab.',
                'Cette expérience me permet au quotidien d’approfondir mes compétences.',
                'Formations obtenues : React avec Dyma et Wordpress avec le centre de formation Campus26',
                'Outils utilisés : Jira, YouTrack, Gitlab',
                'Langages : React JS, Tailwind, Twig, JS, SCSS',
            ],
        },
        {
            title: 'Alternance - ImAAAgery',
            content: [
                'Juil 2021 - Aout 2022 - Développement web, webdesign et graphisme',
                'Imaaagery propose des solutions innovantes alliant la technologie et le secteur de la beauté.',
                "Lors de mon alternance, j'ai eu la chance de travailler sur plusieurs projets de A à Z allant de l’étude du cahier des charges au développement en passant par la conception de l’interface.",
                'Cette expérience m’a permis de me confronter à la réalité du terrain, en mettant en pratique les compétences acquises à l’université.',
                'Mes missions étaient les suivantes : analyser les besoins des clients et comprendre leurs attentes proposer des wireframes et des maquettes développer les sites produire des supports de communication (carte de voeux et une vidéo en motion design) ',
                "Cette expérience m'a permis de développer ma polyvalence et mon autonomie. J'ai acquis une solide maîtrise des outils tels que Figma, GitHub, React, Wordpress/Woocommerce, et j'ai consolidé mes compétences en HTML, CSS, JavaScript et PHP.",
            ],
        },
        {
            title: 'Stage - Kogito',
            content: [
                'Mars 2021 - juin 2021 | Tours (37) - Motion design et création graphique',
                "Au cours de mon stage chez Kogito, j'ai eu la chance de travailler sur des projets dans le domaine du motion design et de la création graphique. ",
                'Mes missions consistait à :proposer des animations pour des logos et des transitions créer un nouveau logo pour une structure concevoir une vidéo pour les réseaux sociaux en motion design animer des illustrations dans le but de réaliser une vidéo servant à la formation',
                'L\'une des réalisations dont je suis particulièrement fier est le projet "El Cafecito", que vous pouvez découvrir dans mon portfolio.',
                "Dans le cadre de ce projet, j'ai utilisé mes compétences en motion design et ma maîtrise des logiciels tels que Photoshop, Illustrator, InDesign, After Effects et Premiere Pro pour créer une expérience visuelle immersive. J'ai apporté une attention particulière aux détails et à la création d'animations fluides, captivant ainsi l'attention des spectateurs et leur transmettant l'essence et l'atmosphère chaleureuse d'un café.",
                "Ce stage chez Kogito m'a permis d'acquérir une autonomie et une polyvalence indispensables dans le monde du design. J'ai pu explorer de nouvelles techniques, affiner mes compétences et découvrir de nouvelles perspectives dans le domaine du motion design.",
            ],
        },
    ];

    return (
        <div className='flex flex-col gap-4 pt-4'>
            <div className='flex flex-col items-center w-full gap-4'>
                <h1>A propos</h1>
                <Breadcrumb />
            </div>
            <section className='flex w-full gap-8 m-auto h-128 max-w-screen-2xl'>
                <Tabs tabs={tabs} />
            </section>
        </div>
    );
};

export default Experiences;
