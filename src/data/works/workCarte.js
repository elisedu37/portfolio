import carteImage from '../../assets/portfolio/miniatures/miniaCarte.png';

const workCarte = {
    id: 'alacarte',
    title: 'À la carte',
    type: 'perso',
    category: 'UX / UI Design',
    date: '2022',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='mr'>
                "À la carte" est un projet de maquettage pour un site e-commerce basé sur le zéro déchet. Le concept est
                le suivant : les clients peuvent commander des produits en vrac via le site et retirer leur commande au
                magasin.
            </p>
            <p>
                J'ai réalisé les trois pages principales : la page d'accueil, le catalogue de produits et une fiche
                produit.
            </p>
            <p>
                La page d'accueil explique au consommateur la marche à suivre pour commander, la méthode dont la
                boutique fonctionne et met en avant les produits phares. L'objectif est de mettre en confiance
                l'utilisateur pour qu'il effectue ses achats de manière durable, responsable et respectueuse de
                l'environnement...
            </p>
        </div>
    ),
    skills: ['Prototypage', 'Conception UI', 'Figma'],
    image: carteImage,
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
            <p className='font-semibold text-orange-200'>2022</p>
            <h1 className='mt-2 text-3xl font-bold '>UX / UI Design</h1>
            <div className='flex flex-col gap-4 mt-4 leading-7'>
                <p>
                    <span className='font-semibold'>Compétences : </span>
                    Conception d'interfaces, prototypage
                </p>
                <p>
                    <span className='font-semibold'>Outil : </span>
                    Figma
                </p>
                <p>
                    "A la carte" est un projet de maquettage pour un site e-commerce basé sur le zéro déchet. Le concept
                    est le suivant : les clients peuvent commander des produits en vrac via le site et retirer leur
                    commande au magasin.
                </p>
                <p>
                    J'ai réalisé les trois pages principales : la page d'accueil, le catalogue de produits et une fiche
                    produit.
                </p>
                <h2>Le public visé</h2>
                <p>
                    "A la carte" est une boutique fictive, située dans une ville moyenne. Les clients qui utilisent le
                    service de click and collect se trouvent donc dans une zone géographique proche, pour pouvoir passer
                    facilement récupérer leur commande.
                </p>
                <p>
                    <span className='font-semibold'>Cible principale : </span> Les consommateurs souhaitant réduire
                    leurs déchets et préserver l'environnement. Ils cherchent des solutions pratiques pour adopter un
                    mode de vie durable et sont intéressés par les produits en vrac pour limiter les emballages
                    jetables.
                </p>
                <p>
                    <span className='font-semibold'> Cible secondaire : </span>
                    Les consommateurs ouverts à la démarche zéro déchet et sensibles aux problématiques
                    environnementales. Grâce au site, ils peuvent faire leurs premiers pas de manière simple et rapide.
                </p>
                <h2>En détail</h2>

                <p>
                    <span className='font-semibold'> La page d'accueil </span>
                    explique au consommateur la marche à suivre pour commander, la méthode dont la boutique fonctionne
                    et met en avant les produits phares. L'objectif est de mettre en confiance l'utilisateur pour qu'il
                    effectue ses achats de manière durable, responsable et respectueuse de l'environnement L'interface
                    est conçue pour accueillir les internautes de manière conviviale et informative.
                </p>
                <p>
                    <span className='font-semibold'> La page du catalogue de produits </span>
                    référence tous les articles disponibles et ils sont organisés par catégories. Chaque produit est
                    accompagné de ses labels : bio, etc. Les utilisateurs ont la possibilité d'ajouter les produits à
                    leur panier, ce qui les redirige vers la page du produit.
                </p>
                <p>
                    <span className='font-semibold'> La fiche produit </span>
                    fournit des informations supplémentaires sur le produit, telles que sa composition, son mode
                    d'utilisation etc. Le bouton "Ajouter au panier" permet aux utilisateurs de sélectionner la quantité
                    souhaitée et d'ajouter le produit à leur panier d'achat. Ils peuvent ensuite continuer ou accéder à
                    leur panier.
                </p>
            </div>
        </>
    ),
    singleImg: true,
};

export default workCarte;
