import cocoonImage from '../../assets/portfolio/miniatures/miniaCocoonMoi.png';

const workCocoon = {
    id: 'cocoon',
    title: 'Cocoon Moi',
    category: 'Développement',
    date: '2021',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='m-0 sm:mr-44'>
                Le projet Cocoon Moi était une collaboration entre deux personnes, travaillant dans le domaine du web et
                du design, et Mme Christine Barge, notre commanditaire. L'objectif était de développer son activité de
                massage pour bébé en créant une identité de marque cohérente et en mettant en place une présence en
                ligne efficace.
            </p>
            <p>
                Nos missions dans ce projet étaient les suivantes : création du cahier des charges, définir le nom, le
                logo et la charte graphique, imaginer le site vitrine et établir un plan de communication
            </p>
        </div>
    ),
    skills: ['Maquettage', 'Bootstrap'],
    more: true,
    image: cocoonImage,
    actions: [{ id: 'cocoon_site', text: 'Visiter le site', link: 'https://www.cocoonmoi.fr/', icon: 'Planet' }],
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
                <p className='m-0 sm:mr-44'>
                    Le projet Cocoon Moi était une collaboration entre deux personnes, travaillant dans le domaine du
                    web et du design, et Mme Christine Barge, notre commanditaire. L'objectif était de développer son
                    activité de massage pour bébé en créant une identité de marque cohérente et en mettant en place une
                    présence en ligne efficace.
                </p>
                <p>
                    Nos missions dans ce projet étaient les suivantes : création du cahier des charges, définir le logo
                    et la charte graphique, imaginer le site vitrine et établir un plan de communication
                </p>
                <h2>En détails</h2>
                <p>
                    1. Créer un cahier des charges : Nous avons travaillé en étroite collaboration avec Mme Christine
                    Barge pour comprendre ses besoins, ses objectifs et son public cible. Nous avons documenté ces
                    informations dans un cahier des charges détaillé, qui servirait de guide pour la création de la
                    marque et du site web.
                </p>
                <p>
                    2. Définir le nom de l'entreprise : Nous avons brainstormé et exploré différentes options pour
                    trouver un nom percutant et représentatif de l'activité de massage pour bébé. Après plusieurs
                    échanges et discussions avec le commanditaire, nous avons déterminé le nom "Cocoon Moi", qui
                    évoquait parfaitement l'ambiance douce et réconfortante du massage pour bébé.
                </p>
                <p>
                    3. Créer un logo et sa charte graphique : Nous avons conçu un logo pour Cocoon Moi en utilisant des
                    outils tels qu'Illustrator. Le logo représentait l'idée de douceur et de confort, avec des couleurs
                    apaisantes et des formes organiques. En plus du logo, nous avons également créé une charte graphique
                    comprenant des éléments visuels cohérents tels que les typographies, les couleurs et les motifs.
                </p>
                <p>
                    4. Créer un site vitrine : Nous avons développé un site vitrine pour Cocoon Moi en utilisant
                    Bootstrap, un framework de développement web. Le site présentait l'activité de massage pour bébé,
                    les services proposés, les informations sur Mme Christine Barge et les témoignages des clients
                    satisfaits. Nous avons veillé à ce que le site soit convivial, esthétiquement agréable et facile à
                    naviguer pour les visiteurs.
                </p>
                <p>
                    5. Établir un plan de communication digitale et print : Nous avons élaboré un plan de communication
                    pour promouvoir Cocoon Moi, en utilisant à la fois des supports numériques et imprimés. Nous avons
                    créé des visuels attractifs et engageants à l'aide d'outils tels que Canva, pour les partager sur
                    les réseaux sociaux et les utiliser dans des campagnes publicitaires imprimées.
                </p>
                <h2>Bilan</h2>
                <p>
                    Les outils principaux utilisés dans le cadre du projet Cocoon Moi étaient Bootstrap pour le
                    développement du site web, Illustrator pour la création du logo et Canva pour la conception de
                    visuels. Ces outils nous ont permis de réaliser un travail de qualité et de créer une identité de
                    marque cohérente pour Cocoon Moi.
                </p>
                <p>
                    Grâce à notre collaboration avec Mme Christine Barge et à notre expertise en web et design, nous
                    avons pu contribuer au développement de son activité de massage pour bébé en lui offrant une
                    présence en ligne professionnelle et une image de marque distincte.
                </p>
            </div>
        </>
    ),
    singleImg: false,
    singleImgUrl: [],
};

export default workCocoon;
