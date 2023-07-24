import randomImage from '../../assets/portfolio/miniatures/Random.png';

const workGallery = {
    id: 'gallery',
    title: 'gallery',
    category: 'Développement',
    date: '2022',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='mr'>
                C'est un projet dont l'objectif est de créer une galerie d'images en utilisant une mosaïque aléatoire. A
                chaque visite sur le site, l'expérience est différente.
            </p>
        </div>
    ),
    skills: ['React JS'],
    image: randomImage,
    actions: [
        {
            id: 'random_site',
            text: 'Visiter le site',
            link: 'https://gallery-randomizer.stackblitz.io/',
            icon: 'Planet',
        },
    ],
};

export default workGallery;
