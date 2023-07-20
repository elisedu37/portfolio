import ptoujoursImage from '../../assets/portfolio/miniatures/miniaPToujours.png';

const workPToujours = {
    id: 'ptoujours',
    title: 'Pour toujours',
    type: 'perso',
    category: 'UX / UI Design',
    date: '2023',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='m-0 sm:mr-44'>
                Pour Toujours est une application mobile dédiée à l'échange de jouets et d'articles pour enfants
                d'occasion. Notre objectif principal est de faciliter le processus d'échange entre les parents, en
                favorisant la réutilisation des jouets et en encourageant une consommation plus durable.
            </p>
        </div>
    ),
    skills: ['React JS'],
    image: ptoujoursImage,
    more: true,
    singleProjectContent: (
        <>
            <p className='font-semibold text-orange-400'>2023</p>
            <h1 className='mt-2 text-3xl font-bold '>UX / UI Design</h1>
            <div className='flex flex-col gap-4 mt-2 leading-7'>
                <p>
                    L'interface utilisateur de Pour Toujours sera conçue de manière conviviale et attrayante pour les
                    parents. Les couleurs et les éléments visuels seront choisis de manière à créer une atmosphère
                    ludique et adaptée à l'univers des enfants. L'objectif principal est de fournir une expérience
                    utilisateur intuitive, où les utilisateurs peuvent naviguer facilement, trouver les articles
                    recherchés et communiquer de manière transparente avec les autres membres. En combinant une
                    interface utilisateur conviviale et des fonctionnalités spécifiques à l'échange de jouets et
                    d'articles pour enfants, Pour Toujours vise à faciliter les échanges entre parents, à promouvoir
                    l'économie circulaire et à offrir une alternative durable à l'achat de jouets neufs.
                </p>
            </div>
        </>
    ),
    singleImg: false,
    singleImgUrl: [],
};

export default workPToujours;
