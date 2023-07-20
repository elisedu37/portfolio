import carteImage from '../../assets/portfolio/miniatures/miniaCarte.png';

const workCarte = {
    id: 'carte',
    title: 'À la carte',
    type: 'perso',
    category: 'UX / UI Design',
    date: '2022',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='m-0 sm:mr-44'>
                "A la carte" est un projet de maquettage pour un site e-commerce basé sur le zéro déchet. Le concept est
                le suivant : les clients peuvent commander des produits en vrac via le site et retirer leur commande au
                magasin.
            </p>
            <p>
                J'ai réalisé les trois pages principales : la page d'accueil, le catalogue de produits et une fiche
                produit.
            </p>
            <p>
                La page d'accueil explique au consommateur la marche à suivre pour commander, la méthode dont la
                boutique fonctionne et met en avant les produits phares. L'objectif est mettre en confiance
                l'utilisateur pour qu'il effectue ses courses de manière durable, considérée et respectueuse de
                l'environnement.
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
                    Conception d'interfaces, Prototypage
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
                    "A la carte" est une boutique fictive, se situant dans une ville moyenne. Les clients qui commande
                    en click and collect sont par conséquent dans une zone géographique proche pour pouvoir passer
                    facilement récupérer leur commande.
                </p>
                <p>
                    <span className='font-semibold'>Cible principale : </span> Les consommateurs souhaitant réduire
                    leurs déchets et de préserver l'environnement. Ces personnes cherchent des moyens pratiques pour
                    adopter un mode de vie durable. Ils sont intéressés par les produits en vrac et cherchent des
                    alternatives écologiques aux emballages jetables.
                </p>
                <p>
                    <span className='font-semibold'> Cible secondaire : </span>
                    Les consommateurs sensibles aux problématiques environnementales mais qui n'ont pas encore adopté
                    une démarche zéro déchet. Grace au site, ils peuvent faire leurs premiers pas de manière simple et
                    rapide.
                </p>
                <h2>En détails</h2>

                <p>
                    <span className='font-semibold'> Accueil : </span>
                    La page d'accueil explique au consommateur la marche à suivre pour commander, la méthode dont la
                    boutique fonctionne et met en avant les produits phares. L'objectif est mettre en confiance
                    l'utilisateur pour qu'il effectue ses courses de manière durable, considérée et respectueuse de
                    l'environnement.
                </p>
                <p>
                    Accueil : La page d'accueil du site "A la carte" est conçue pour accueillir les visiteurs de manière
                    conviviale et informative. Elle met en avant les valeurs du projet, mettant l'accent sur la
                    réduction des déchets, la durabilité et le respect de l'environnement. Une bannière attrayante
                    présente le slogan du site et invite les utilisateurs à découvrir le catalogue de produits.
                </p>
                <p>
                    <span className='font-semibold'> Catalogue de produits : </span>
                    La page du catalogue de produits offre une vue d'ensemble des articles disponibles à l'achat en
                    vrac. Les produits sont organisés de manière intuitive, par catégories telles que les produits
                    alimentaires, les produits de soin, les produits ménagers, etc. Les utilisateurs peuvent naviguer
                    facilement à travers les différentes catégories et filtrer les produits en fonction de leurs besoins
                    spécifiques. Chaque produit est accompagné d'une courte description mettant en valeur ses
                    caractéristiques, son origine éventuelle, et les avantages écologiques liés à son utilisation. Des
                    informations sur le mode de conditionnement et les options de quantité sont également fournies. Les
                    utilisateurs ont la possibilité d'ajouter les produits à leur panier d'achat directement depuis la
                    page du catalogue.
                </p>
                <p>
                    <span className='font-semibold'> Fiche produit : </span>
                    En cliquant sur un produit spécifique, les utilisateurs accèdent à la fiche produit détaillée. Cette
                    page fournit des informations approfondies sur le produit, telles que sa composition, son mode
                    d'utilisation, ses certifications éventuelles, etc. Des images de haute qualité illustrent le
                    produit sous différents angles. La fiche produit inclut également des suggestions d'utilisation
                    écologique ou de combinaison avec d'autres produits complémentaires. Les utilisateurs peuvent lire
                    les avis et commentaires d'autres clients ayant déjà acheté le produit, ce qui leur permet de
                    prendre une décision d'achat éclairée. Un bouton "Ajouter au panier" est présent sur la fiche
                    produit, permettant aux utilisateurs de sélectionner la quantité souhaitée et d'ajouter le produit à
                    leur panier d'achat. Ils peuvent ensuite continuer leur navigation ou accéder directement à leur
                    panier pour finaliser leur commande.
                </p>
                <h2>Bilan</h2>

                <p>
                    Ces pages, pensées pour faciliter la découverte des produits et la prise de décision d'achat,
                    contribuent à offrir une expérience utilisateur agréable et intuitive sur le site "A la carte". En
                    combinant une interface utilisateur intuitive et des fonctionnalités centrées sur le zéro déchet, "A
                    la carte" vise à offrir une plateforme pratique et engageante pour les consommateurs soucieux de
                    l'environnement, les encourageant ainsi à adopter un mode de vie plus durable et responsable.
                </p>
            </div>
        </>
    ),
    singleImg: true,
};

export default workCarte;
