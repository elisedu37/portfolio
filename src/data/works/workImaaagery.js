import imaaageryImage from '../../assets/portfolio/miniatures/miniaCarte.png';

const workImaaagery = {
    id: 'imaaagery',
    title: 'Imaaagery',
    category: 'Communication',
    date: '2022',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='mr'></p>
        </div>
    ),
    skills: ['Illustrator', 'After Effects', 'Motion design'],
    more: true,
    image: imaaageryImage,
    actions: [{ id: 'imaaagery_site', text: 'Visiter le site', link: 'http://lien-du-site.com', icon: 'Planet' }],
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

export default workImaaagery;
