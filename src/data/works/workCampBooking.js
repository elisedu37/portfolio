import randomImage from '../../assets/portfolio/miniatures/Random.png';

const workCampBooking = {
    id: 'campbooking',
    title: 'campbooking',
    category: 'Développement',
    date: '2022',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='m-0 sm:mr-44'></p>
        </div>
    ),
    skills: ['React JS'],
    more: true,
    image: randomImage,
    actions: [
        { id: 'random_site', text: 'Visiter le site', link: 'https://campbooking.stackblitz.io/', icon: 'Planet' },
    ],
    singleProjectContent: (
        <>
            <p className='font-semibold text-orange-400'>2022</p>
            <h1 className='mt-2 text-3xl font-bold '>UX / UI Design</h1>
            <div className='flex flex-col gap-4 mt-2 leading-7'></div>
        </>
    ),
    singleImg: false,
    singleImgUrl: [],
};

export default workCampBooking;
