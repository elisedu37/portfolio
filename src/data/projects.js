// Images
import zino from '../assets/portfolio/miniatures/miniaZino.png';
import carte from '../assets/portfolio/miniatures/miniaCarte.png';

// Liste des projets
export const projects = [
    {
        id: 'carte',
        title: 'A la carte',
        type: 'perso',
        category: 'UX / UI Design',
        date: '2022',
        content: (
            <div>
                <p className='mr-44'>
                    "A la carte" est un projet de maquettage pour un site e-commerce basé sur le zéro déchet. Le concept
                    est le suivant : les clients peuvent commander des produits en vrac en ligne et retirer leur
                    commande au magasin.
                </p>
                <p className='mr-44'>
                    Le site que j’ai imaginé explique la marche à suivre pour commander et met en valeur les produits.
                    L'objectif est de faire ses courses de manière durable, considérée et respectueuse de
                    l'environnement.
                </p>
            </div>
        ),
        skills: ['Figma', 'Conception UI', 'Prototypage'],
        image: carte,
        more: true,
        actions: [{ id: 'carte_maquette', text: 'Voir les maquettes', link: '', icon: '' }],
        singleProjectContent: (
            <>
                <p className='font-semibold text-orange-400'>Logipro : Spt 2022 à aujourd’hui</p>
                <h1 className='mt-2 text-3xl font-bold '>Développeuse front-end</h1>
                <div className='flex flex-col gap-4 mt-2 leading-7'>
                    <p>
                        Je travaille sur le développement de deux logiciels : Agora Learning et Crea Learning. Cette
                        suite de logiciels permet la création et la diffusion de modules e-learning.
                    </p>
                    <p>
                        Au sein de l'équipe, je m’occupe du développement front-end et du maquettage des nouvelles
                        fonctionnalités.
                    </p>
                    <p>
                        Pour Créa Learning, nous sommes en train de faire une refonte de l’ensemble du logiciel avec
                        React JS et Symfony. J’ai pu travailler sur l’éditeur de module avec l’implémentation des
                        différents blocs disponibles.
                    </p>
                    <p>
                        En parallèle, sur Agora Learning, le travail consiste à ajouter de nouvelles fonctionnalités.
                        Pour ma part, j’effectue des modifications sur les templates Twig et le JavaScript car ce projet
                        est entièrement développé sous Symfony.
                    </p>
                    <p>
                        Pour Créa Learning, nous sommes en train de faire une refonte de l’ensemble du logiciel avec
                        React JS et Symfony. J’ai pu travailler sur l’éditeur de module avec l’implémentation des
                        différents blocs disponibles.
                    </p>
                    <p>
                        En parallèle, sur Agora Learning, le travail consiste à ajouter de nouvelles fonctionnalités.
                        Pour ma part, j’effectue des modifications sur les templates Twig et le JavaScript car ce projet
                        est entièrement développé sous Symfony.
                    </p>
                    <p>
                        En plus des nouvelles features, l’espace apprenant est en train d’être refondu. Je me suis
                        occupé de faire l’ensemble des wireframes et des premières maquettes. Ce travail m’a permis
                        d’apporter des idées pour améliorer le logiciel et l’expérience utilisateur.
                    </p>
                    <p>
                        Au niveau de la gestion de projet, nous utilisons la méthode agile SCRUM et le versionnage de
                        notre code avec GitLab.
                    </p>
                    <p>Cette expérience me permet au quotidien d’approfondir mes compétences.</p>
                    <ul className='gap-4'>
                        <li>
                            <span className='font-semibold'>Formations obtenues. </span>
                            React avec Dyma et Wordpress avec le centre de formation Campus26
                        </li>
                        <li>
                            <span className='font-semibold'>Outils utilisés. </span>
                            Jira, YouTrack, Gitlab
                        </li>
                        <li>
                            <span className='font-semibold'>Langages. </span>
                            React JS, Tailwind, Twig, JS, SCSS
                        </li>
                    </ul>
                </div>
            </>
        ),
        singleImg: false,
        singleImgUrl: [],
    },
    {
        id: 'zino',
        title: 'Zino',
        category: 'Développement',
        date: '01/02/2021',
        content: (
            <div>
                <p className='mr-44'>
                    Challenge "intégration web": 1 semaine pour intégrer une maquette en HTML / CSS et créer un thème
                    custom sur Wordpress.
                </p>
                <p className='mr-44'>
                    Le thème custom a permis d'avoir une partie administrateur et de créer facilement un site unique.
                    Plus tard, mon intégration a été reprise et améliorée pour le site officiel de Zino.
                </p>
            </div>
        ),
        skills: ['Wordpress', 'Woocommerce', 'HTML5 / CSS3'],
        image: zino,
        actions: [
            { id: 'zino_site', text: 'Visiter le site', link: '', icon: '' },
            { id: 'zino_git', text: 'Voir le GIT', link: '', icon: '' },
        ],
    },
    {
        id: 'carte2',
        title: 'A la carte',
        category: 'UX / UI Design',
        date: '15/12/2022',
        content: (
            <div>
                <p className='mr-44'>
                    "A la carte" est un projet de maquettage pour un site e-commerce basé sur le zéro déchet. Le concept
                    est le suivant : les clients peuvent commander des produits en vrac en ligne et retirer leur
                    commande au magasin.
                </p>
                <p className='mr-44'>
                    Le site que j’ai imaginé explique la marche à suivre pour commander et met en valeur les produits.
                    L'objectif est de faire ses courses de manière durable, considérée et respectueuse de
                    l'environnement.
                </p>
            </div>
        ),
        skills: ['Figma', 'Conception UI', 'Prototypage'],
        image: carte,
        actions: [{ id: 'carte2_btn', text: 'Voir les maquettes', link: '', icon: '' }],
    },
    {
        id: 'zino2',
        title: 'Zino',
        category: 'Développement',
        date: '01/02/2021',
        content: (
            <div>
                <p className='mr-44'>
                    Challenge "intégration web": 1 semaine pour intégrer une maquette en HTML / CSS et créer un thème
                    custom sur Wordpress.
                </p>
                <p className='mr-44'>
                    Le thème custom a permis d'avoir une partie administrateur et de créer facilement un site unique.
                    Plus tard, mon intégration a été reprise et améliorée pour le site officiel de Zino.
                </p>
            </div>
        ),
        skills: ['Wordpress', 'Woocommerce', 'HTML5 / CSS3'],
        image: zino,
        actions: [
            { id: 'git2', text: 'Visiter le site', link: '', icon: '' },
            { id: 'btn1', text: 'Voir le GIT', link: '', icon: '' },
        ],
    },
];
