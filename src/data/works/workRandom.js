import randomImage from '../../assets/portfolio/miniatures/Random.png';

const workRandom = {
    id: 'random',
    title: 'Random',
    category: 'Développement',
    date: 'XX/XX/XXXX',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='mr-44'>
                "A la carte" est un projet de maquettage pour un site e-commerce basé sur le zéro déchet. Le concept est
                le suivant : les clients peuvent commander des produits en vrac en ligne et retirer leur commande au
                magasin.
            </p>
            <p className='mr-44'>
                Le site que j’ai imaginé explique la marche à suivre pour commander et met en valeur les produits.
                L'objectif est de faire ses courses de manière durable, considérée et respectueuse de l'environnement.
            </p>
            <p>Page imaginée: Accueil, catalogue de produit et une fiche produit</p>
        </div>
    ),    skills: ['Compétence 1', 'Compétence 2', 'Compétence 3'],
    more: true,
    image: randomImage,
    actions: [{ id: 'random_site', text: 'Visiter le site', link: 'http://lien-du-site.com', icon: 'Planet' }],
    singleProjectContent: (
        <>
            <p className='font-semibold text-orange-400'>2022</p>
            <h1 className='mt-2 text-3xl font-bold '>UX / UI Design</h1>
            <div className='flex flex-col gap-4 mt-2 leading-7'>
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
};

export default workRandom;
