import ptoujoursImage from '../../assets/portfolio/miniatures/miniaPToujours.png';

const workPToujours = {
    id: 'ptoujours',
    title: 'Pour toujours',
    type: 'perso',
    category: 'UX / UI Design',
    date: '2023',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='mr'>
                Pour Toujours est une application mobile dédiée à l'échange de jouets et d'articles pour enfants
                d'occasion. Notre objectif principal est de faciliter le processus d'échange entre les parents, en
                favorisant la réutilisation des jouets et en encourageant une consommation plus durable.
            </p>
        </div>
    ),
    skills: ['React JS'],
    image: ptoujoursImage,
};

export default workPToujours;
