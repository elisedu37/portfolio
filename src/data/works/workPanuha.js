import pahunaImage from '../../assets/portfolio/miniatures/miniaPahuna.png';

const workPahuna = {
    id: 'pahuna',
    title: 'Pahuna',
    category: 'Communication',
    date: '2022',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='m-0 sm:mr-44'>
                Dans le cadre d'un défi lancé par notre professeur, nous avons eu 4 heures pour démontrer notre
                créativité et notre maîtrise de Photoshop. La consigne était de créer une publicité pour une boisson non
                alcoolisée destinée aux enfants.
            </p>
        </div>
    ),
    skills: ['Photoshop'],
    more: true,
    image: pahunaImage,
    singleProjectContent: (
        <>
            <p className='font-semibold text-orange-400'>2022</p>
            <h1 className='mt-2 text-3xl font-bold '>UX / UI Design</h1>
            <div className='flex flex-col gap-4 mt-2 leading-7'>
                <p>
                    Dans le cadre d'un défi lancé par notre professeur, nous avons eu 4 heures pour démontrer notre
                    créativité et notre maîtrise de Photoshop. La consigne était de créer une publicité pour une boisson
                    non alcoolisée destinée aux enfants.
                </p>
                <p>
                    J'ai choisi d'imaginer une boisson pour enfant inspirée des saveurs tropicales, évoquant l'univers
                    exotique et rafraîchissant des jus de fruits. Pour cela, j'ai créé un nom, "Pahuna", qui évoque
                    cette atmosphère tropicale et ludique.
                </p>
                <p>
                    Afin d'attirer à la fois les enfants et les parents, j'ai opté pour une approche visuelle simple
                    mais captivante. J'ai utilisé des couleurs vives et fantastiques, qui stimulent l'imagination et
                    suscitent l'envie de découvrir la boisson. Les visuels ont été conçus de manière à mettre en valeur
                    les ingrédients naturels et sains de la boisson, tout en créant une ambiance joyeuse et ludique.
                </p>
                <p>
                    Pour réaliser ce projet, l'outil imposé était Photoshop. J'ai exploité les fonctionnalités de ce
                    logiciel pour créer des compositions visuelles attrayantes, en manipulant les couleurs, les formes
                    et les textures. J'ai également utilisé des éléments graphiques personnalisés pour renforcer
                    l'identité de Pahuna et donner vie à la publicité.
                </p>
                <p>
                    Ce défi m'a permis de mettre en pratique mes compétences en design et ma maîtrise de Photoshop. J'ai
                    pu démontrer ma créativité en imaginant une publicité pour une boisson non alcoolisée destinée aux
                    enfants, en utilisant des couleurs fantastiques et une approche visuelle attractive. En utilisant
                    Photoshop comme outil principal, j'ai pu créer des visuels percutants qui mettent en valeur les
                    caractéristiques uniques de Pahuna et qui suscitent l'intérêt des enfants et des parents.
                </p>
            </div>
        </>
    ),
    singleImg: false,
    singleImgUrl: [],
};

export default workPahuna;
