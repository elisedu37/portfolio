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
                    Marketing, stratégie digitale
                </p>
                <p>
                    <span className='font-semibold'>Outils : </span>
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
                    <span className='font-semibold'>Analyser l'univers graphique de Yuka : </span>
                    Nous avons étudié l'identité visuelle et le style graphique de Yuka, afin de comprendre les codes.
                    Cela nous a permis de construire notre univers en gardant une cohérence avec l'identité de la
                    marque.
                </p>
                <p>
                    <span className='font-semibold'>Définir un nouvel univers pour la version premium : </span>
                    Nous avons réfléchi aux éléments graphiques en gardant les couleurs et l'identité de Yuka .
                    L'objectif était de mettre en avant Yuka premium et de susciter l'intérêt.
                </p>
                <p>
                    <span className='font-semibold'>Établir un plan d'action pour une campagne de marketing : </span>
                    Cela comprenait plusieurs éléments : les objectifs, les cibles, et les stratégies a adopter pour la
                    campagne.
                </p>
                <p>
                    <span className='font-semibold'>Proposer des posts Instagram et une vidéo TikTok : </span>
                    Nous avons créé des posts Instagram mettant en avant les fonctionnalités et les avantages de la
                    version premium.
                </p>
                <p>
                    <span className='font-semibold'>Proposer une stratégie E-RP : </span>
                    Cette stratégie a été pensée pour renforcer la notoriété et gagné de la visibilité grâce à des
                    influenceurs, à des médias.
                </p>
            </div>
        </>
    ),
    singleImg: false,
    singleImgUrl: [],
};

export default workYuka;
