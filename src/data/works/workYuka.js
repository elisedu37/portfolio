import yukaImage from '../../assets/portfolio/miniatures/miniaYuka.png';
import dossier from '../../assets/portfolio/dossierYuka.pdf';

const workYuka = {
    id: 'yuka',
    title: 'Yuka',
    category: 'Communication',
    date: '2022',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='mr'>
                Dans le cadre de ce projet réalisé en groupe de trois, nous avons été chargés d'imaginer une stratégie
                digitale pour promouvoir la version premium de Yuka.
            </p>
            <p className='mr'>
                Notre mission consistait à partir de l'univers graphique existant de Yuka et créer un nouvel univers
                pour la version premium. En plus de cela, nous avons élaboré un plan d'action pour une campagne
                marketing.
            </p>
            <p>
                Pour finir, nous avons créé des posts pour les réseaux sociaux, sous la forme de trois visuels pour
                Instagram et une vidéo promotionnelle pour TikTok.
            </p>
        </div>
    ),
    skills: ['Illustrator', 'After Effects'],
    more: true,
    image: yukaImage,
    actions: [
        {
            id: 'yuka_site',
            text: 'Vidéo TikTok',
            link: 'https://youtube.com/shorts/K1kcluB4mag',
            icon: 'YoutubeLogo',
        },
        {
            id: 'yuka_dossier',
            text: 'Dossier',
            link: dossier,
            icon: 'File',
        },
    ],
    singleProjectContent: (
        <>
            <p className='font-semibold text-orange-400'>2022</p>
            <h1 className='mt-2 text-3xl font-bold '>Communication</h1>
            <div className='flex flex-col gap-4 mt-2 leading-7'>
                <p>
                    <span className='font-semibold'>Compétences : </span>
                    Marketing
                </p>
                <p>
                    <span className='font-semibold'>Outil : </span>
                    Illustrator, After Effects
                </p>
                <p>
                    Dans le cadre de ce projet réalisé en groupe de trois, nous avons été chargés d'imaginer une
                    stratégie digitale pour promouvoir la version premium de Yuka.
                </p>
                <p>
                    Notre mission consistait à partir de l'univers graphique existant de Yuka et créer un nouvel univers
                    pour la version premium. En plus de cela, nous avons élaboré un plan d'action pour une campagne
                    marketing.
                </p>
                <p>
                    Pour finir, nous avons créé des posts pour les réseaux sociaux, sous la forme de trois visuels pour
                    Instagram et une vidéo promotionnelle pour TikTok.
                </p>
                <h2>En détail</h2>
                <p>
                    1. Analyser l'univers graphique de Yuka : Nous avons étudié attentivement l'identité visuelle et le
                    style graphique de Yuka, afin de comprendre les codes esthétiques qui lui étaient propres. Cela nous
                    a permis de construire notre stratégie en gardant à l'esprit la cohérence avec l'identité de la
                    marque.
                </p>
                <p>
                    2. Définir un nouvel univers pour la version premium : Nous avons travaillé sur la création d'un
                    nouvel univers graphique spécifique à la version premium de Yuka. Nous avons réfléchi aux couleurs,
                    aux typographies, aux visuels et aux éléments graphiques qui refléteraient la valeur ajoutée de
                    cette version. L'objectif était de mettre en avant le caractère premium de l'offre et de susciter
                    l'intérêt des utilisateurs.
                </p>
                <p>
                    3. Établir un plan d'action pour une campagne de marketing : Nous avons développé un plan d'action
                    détaillé pour une campagne de marketing visant à promouvoir la version premium de Yuka. Cela
                    comprenait des objectifs clairs, des cibles définies, des canaux de communication appropriés, ainsi
                    que des stratégies de contenu et des mesures de suivi pour évaluer l'efficacité de la campagne.
                </p>
                <p>
                    4. Proposer des posts Instagram et une vidéo TikTok : Nous avons créé des posts Instagram attrayants
                    mettant en avant les fonctionnalités et les avantages de la version premium de Yuka. De plus, nous
                    avons conçu une vidéo TikTok dynamique et engageante pour toucher un public plus large et susciter
                    l'intérêt des utilisateurs potentiels.
                </p>
                <p>
                    5. Proposer une stratégie E-RP : Nous avons également élaboré une stratégie de relations publiques
                    en ligne (E-RP) pour renforcer la notoriété de la version premium de Yuka. Cela comprenait
                    l'identification des influenceurs pertinents, la création de partenariats, la gestion des relations
                    avec les médias en ligne, et la mise en place d'actions de communication pour maximiser la
                    visibilité de la marque.
                </p>
                <h2>Bilan</h2>
                <p>
                    Ce projet nous a permis de mettre en pratique nos compétences en design et de développer une
                    stratégie digitale complète pour la promotion de la version premium de Yuka. En utilisant des outils
                    tels qu'After Effects et Illustrator, nous avons pu créer des visuels et des animations percutantes,
                    tandis que les réseaux sociaux nous ont offert une plateforme pour diffuser notre contenu et
                    interagir avec le public cible. Notre objectif était de positionner la version premium de Yuka comme
                    udene offre de valeur ajoutée, tout en
                </p>
            </div>
        </>
    ),
    singleImg: false,
    singleImgUrl: [],
};

export default workYuka;
