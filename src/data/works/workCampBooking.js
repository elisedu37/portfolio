import randomImage from '../../assets/portfolio/miniatures/Random.png';

const workCampBooking = {
    id: 'campbooking',
    title: 'campbooking',
    category: 'Développement',
    date: '2022',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='mr'></p>
        </div>
    ),
    skills: ['React JS'],
    image: randomImage,
    actions: [
        { id: 'random_site', text: 'Visiter le site', link: 'https://campbooking.stackblitz.io/', icon: 'Planet' },
    ],
};

export default workCampBooking;
