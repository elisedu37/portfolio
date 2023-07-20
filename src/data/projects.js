// Images
import zino from '../assets/portfolio/miniatures/miniaZino.png';
import carte from '../assets/portfolio/miniatures/miniaCarte.png';
import toujours from '../assets/portfolio/miniatures/miniaPToujours.png';
import newEcovoito from '../assets/portfolio/miniatures/NewEcovoito.png';
import ecovoito from '../assets/portfolio/miniatures/miniaEcovoito.png';

// Liste des projets
export const projects = [
    {
        id: 'carte',
        title: 'À la carte',
        type: 'perso',
        category: 'UX / UI Design',
        date: '2022',
        content: (
            <div className='flex flex-col gap-4'>
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
                <p>Page imaginée: Accueil, catalogue de produit et une fiche produit</p>
            </div>
        ),
        skills: ['Prototypage', 'Conception UI', 'Figma'],
        image: carte,
        more: true,
        actions: [
            {
                id: 'carte_maquette',
                text: 'Découvrir les maquettes',
                link: 'https://www.figma.com/proto/6sIM4vRxr7gpustfwkUtLF/Mes-maquettes?type=design&node-id=804-4399&t=w44bS7PkFhc9aPMq-1&scaling=scale-down&page-id=804%3A1892&starting-point-node-id=804%3A4399&mode=design',
                icon: 'FigmaLogo',
            },
        ],
        singleProjectContent: (
            <>
                <p className='font-semibold text-orange-400'>2022</p>
                <h1 className='mt-2 text-3xl font-bold '>UX / UI Design</h1>
                <div className='flex flex-col gap-4 mt-2 leading-7'>
                    <p>
                        "A la carte" est un projet de maquettage pour un site e-commerce basé sur le zéro déchet. Le
                        concept est le suivant : les clients peuvent commander des produits en vrac en ligne et retirer
                        leur commande au magasin.
                    </p>
                    <p>
                        Le site que j’ai imaginé explique la marche à suivre pour commander et met en valeur les
                        produits. L'objectif est de faire ses courses de manière durable, considérée et respectueuse de
                        l'environnement.
                    </p>
                    <ul className='gap-4'>
                        <li>
                            <span className='font-semibold'>Outils utilisés. </span>
                            Jira, YouTrack, Gitlab
                        </li>
                    </ul>
                </div>
            </>
        ),
        singleImg: false,
        singleImgUrl: [],
    },
    {
        id: 'ptoujours',
        title: 'Pour toujours',
        type: 'perso',
        category: 'UX / UI Design',
        date: '2023',
        content: (
            <div className='flex flex-col gap-4'>
                <p className='mr-44'>
                    Pour Toujours est une application mobile dédiée à l'échange de jouets et d'articles pour enfants
                    d'occasion. Notre objectif principal est de faciliter le processus d'échange entre les parents, en
                    favorisant la réutilisation des jouets et en encourageant une consommation plus durable.
                </p>
            </div>
        ),
        skills: ['Prototypage', 'Conception UI', 'Figma'],
        image: toujours,
        more: true,
        singleProjectContent: (
            <>
                <p className='font-semibold text-orange-400'>2023</p>
                <h1 className='mt-2 text-3xl font-bold '>UX / UI Design</h1>
                <div className='flex flex-col gap-4 mt-2 leading-7'></div>
            </>
        ),
        singleImg: false,
        singleImgUrl: [],
    },
    {
        id: 'refonteEcovoito',
        title: 'Ecovoito, la refonte',
        type: 'perso',
        category: 'UX / UI Design',
        date: '2023',
        content: (
            <div className='flex flex-col gap-4'>
                <p className='mr-44'>
                    repenser l'interface utilisateur (UI) et l'expérience utilisateur (UX) de notre application. site
                    internet et application
                </p>
                <p className='mr-44'>
                    En repensant l'UI/UX d'Ecovoito, nous visons à offrir une expérience utilisateur améliorée,
                    intuitive et esthétiquement plaisante. Nous souhaitons encourager davantage de personnes à adopter
                    des trajets écologiques et contribuer ainsi à la réduction des émissions de CO2.
                </p>
            </div>
        ),
        skills: ['Prototypage', 'Conception UI', 'Figma'],
        actions: [
            {
                id: 'carte_maquette',
                text: 'Découvrir les maquettes',
                link: 'https://www.figma.com/proto/6sIM4vRxr7gpustfwkUtLF/Mes-maquettes?type=design&node-id=804-4399&t=w44bS7PkFhc9aPMq-1&scaling=scale-down&page-id=804%3A1892&starting-point-node-id=804%3A4399&mode=design',
                icon: 'FigmaLogo',
            },
        ],
        image: newEcovoito,
        more: true,
        singleProjectContent: (
            <>
                <p className='font-semibold text-orange-400'>2023</p>
                <h1 className='mt-2 text-3xl font-bold '>UX / UI Design</h1>
                <div className='flex flex-col gap-4 mt-2 leading-7'></div>
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
        more: true,
        image: zino,
        actions: [{ id: 'zino_site', text: 'Visiter le site', link: 'http://zinoelise.tp.crea.pro/', icon: 'Planet' }],
        singleProjectContent: (
            <>
                <p className='font-semibold text-orange-400'>2023</p>
                <h1 className='mt-2 text-3xl font-bold '>UX / UI Design</h1>
                <div className='flex flex-col gap-4 mt-2 leading-7'></div>
            </>
        ),
        singleImg: true,
        singleImgUrl: [],
    },
    {
        id: 'ecovoito',
        title: 'Ecovoito',
        category: 'Développement',
        date: '2022',
        content: (
            <div>
                <p className='mr-44'>
                    5 étudiants dont 2 designers et 3 développeurs (mon cas) se sont associés pour monter un projet
                    comme une start-up. Pour ma part je me suis occupé du développement de l'application. Le défi
                    technique est de créer des itinéraires et de calculer cette distance. Par la suite, cette donnée
                    permet de calculer un taux de CO2 émis par un mode de transport et un score. En plus de cette
                    mission j'ai aidé à l'animation de motion design.
                </p>
            </div>
        ),
        skills: ['React Native', 'Gitlab', 'After Effects'],
        image: ecovoito,
        more: true,
        singleProjectContent: (
            <>
                <p className='font-semibold text-orange-400'>2023</p>
                <h1 className='mt-2 text-3xl font-bold '>UX / UI Design</h1>
                <div className='flex flex-col gap-4 mt-2 leading-7'>
                    <p>
                        Le projet Ecovoito a été initié par cinq étudiants, dont deux designers et trois développeurs,
                        dans le but de créer une start-up. En tant que développeur, j'ai joué un rôle clé dans le
                        développement de l'application. Le défi technique principal était de mettre en place des
                        fonctionnalités permettant de générer des itinéraires et de calculer les distances associées.
                    </p>
                    <p>
                        L'objectif de l'application était de fournir aux utilisateurs un moyen de calculer le taux de
                        CO2 émis lors de leurs déplacements en fonction du mode de transport utilisé. En utilisant les
                        données de distance calculées, nous avons pu évaluer l'empreinte carbone associée à chaque mode
                        de transport et attribuer un score environnemental à l'utilisateur.
                    </p>
                    <p>
                        Outre ma mission de développement, j'ai également apporté mon soutien à l'animation de motion
                        design dans le projet. J'ai utilisé l'outil After Effects pour créer des animations engageantes
                        et visuellement attrayantes, contribuant ainsi à l'expérience utilisateur globale de
                        l'application.
                    </p>
                    <p>
                        Les outils principaux utilisés pour la réalisation du projet Ecovoito ont été React Native, qui
                        a été utilisé pour développer l'application mobile, et After Effects pour les animations de
                        motion design.
                    </p>
                    <p>
                        Ce projet a permis à notre équipe de mettre en pratique nos compétences respectives en design et
                        en développement, tout en travaillant en étroite collaboration pour créer une solution innovante
                        axée sur la réduction de l'empreinte carbone. La combinaison de nos talents a permis de
                        développer une application fonctionnelle et attrayante, offrant aux utilisateurs des
                        informations pertinentes sur leurs émissions de CO2 et les encourager à adopter des modes de
                        transport plus respectueux de l'environnement.
                    </p>
                </div>
            </>
        ),
        singleImg: true,
        singleImgUrl: [],
    },
];
