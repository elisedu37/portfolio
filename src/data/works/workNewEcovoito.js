import newEcovoito from '../../assets/portfolio/miniatures/NewEcovoito.png';

const workNewEcovoito = {
    id: 'refonteEcovoito',
    title: 'Ecovoito, la refonte',
    type: 'perso',
    category: 'UX / UI Design',
    date: '2023',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='m-0 sm:mr-44'>
                repenser l'interface utilisateur (UI) et l'expérience utilisateur (UX) de notre application. site
                internet et application
            </p>
            <p className='m-0 sm:mr-44'>
                En repensant l'UI/UX d'Ecovoito, nous visons à offrir une expérience utilisateur améliorée, intuitive et
                esthétiquement plaisante. Nous souhaitons encourager davantage de personnes à adopter des trajets
                écologiques et contribuer ainsi à la réduction des émissions de CO2.
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
};

export default workNewEcovoito;
