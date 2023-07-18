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
                <p>
                    "A la carte" est un projet de maquettage pour un site e-commerce basé sur le zéro déchet. Le concept
                    est le suivant : les clients peuvent commander des produits en vrac en ligne et retirer leur
                    commande au magasin.
                </p>
                <p>
                    Le site que j’ai imaginé explique la marche à suivre pour commander et met en valeur les produits.
                    L'objectif est de faire ses courses de manière durable, considérée et respectueuse de
                    l'environnement.
                </p>
            </div>
        ),
        skills: ['Figma', 'Conception UI', 'Prototypage'],
        image: carte,
        more: true,
        actions: [{ id: 'carte_maquette', text: 'Voir les maquettes', link: '' }],
        singleImg: false,
    },
    {
        id: 'zino',
        title: 'Zino',
        category: 'Développement',
        date: '01/02/2021',
        content: (
            <div>
                <p>
                    Challenge "intégration web": 1 semaine pour intégrer une maquette en HTML / CSS et créer un thème
                    custom sur Wordpress.
                </p>
                <p>
                    Le thème custom a permis d'avoir une partie administrateur et de créer facilement un site unique.
                    Plus tard, mon intégration a été reprise et améliorée pour le site officiel de Zino.
                </p>
            </div>
        ),
        skills: ['Wordpress', 'Woocommerce', 'HTML5 / CSS3'],
        image: zino,
        actions: [
            { id: 'zino_site', text: 'Visiter le site', link: '' },
            { id: 'zino_git', text: 'Voir le GIT', link: '' },
        ],
    },
    {
        id: 'carte2',
        title: 'A la carte',
        category: 'UX / UI Design',
        date: '15/12/2022',
        content: (
            <div>
                <p>
                    "A la carte" est un projet de maquettage pour un site e-commerce basé sur le zéro déchet. Le concept
                    est le suivant : les clients peuvent commander des produits en vrac en ligne et retirer leur
                    commande au magasin.
                </p>
                <p>
                    Le site que j’ai imaginé explique la marche à suivre pour commander et met en valeur les produits.
                    L'objectif est de faire ses courses de manière durable, considérée et respectueuse de
                    l'environnement.
                </p>
            </div>
        ),
        skills: ['Figma', 'Conception UI', 'Prototypage'],
        image: carte,
        actions: [{ id: 'carte2_btn', text: 'Voir les maquettes', link: '' }],
    },
    {
        id: 'zino2',
        title: 'Zino',
        category: 'Développement',
        date: '01/02/2021',
        content: (
            <div>
                <p>
                    Challenge "intégration web": 1 semaine pour intégrer une maquette en HTML / CSS et créer un thème
                    custom sur Wordpress.
                </p>
                <p>
                    Le thème custom a permis d'avoir une partie administrateur et de créer facilement un site unique.
                    Plus tard, mon intégration a été reprise et améliorée pour le site officiel de Zino.
                </p>
            </div>
        ),
        skills: ['Wordpress', 'Woocommerce', 'HTML5 / CSS3'],
        image: zino,
        actions: [
            { id: 'git2', text: 'Visiter le site', link: '' },
            { id: 'btn1', text: 'Voir le GIT', link: '' },
        ],
    },
];
