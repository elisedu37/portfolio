import ptoujoursImage from '../../assets/portfolio/miniatures/miniaPToujours.png';

const workPToujours = {
    id: 'ptoujours',
    title: 'Pour toujours',
    type: 'perso',
    category: 'UX / UI Design',
    date: '2023',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='mr-44'>
                Pour Toujours est une application mobile dédiée à l'échange de jouets et d'articles pour enfants
                d'occasion. Notre objectif principal est de faciliter le processus d'échange entre les parents, en
                favorisant la réutilisation des jouets et en encourageant une consommation plus durable.
            </p>
        </div>
    ),
    skills: ['Prototypage', 'Conception UI', 'Figma'],
    image: ptoujoursImage,
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

export default workPToujours;
