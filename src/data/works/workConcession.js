import concessionImage from '../../assets/portfolio/miniatures/miniaCarte.png';

const workConcession = {
    id: 'concession',
    title: 'Concession automobile',
    category: 'Développement',
    date: '2022',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='m-0 sm:mr-44'></p>
        </div>
    ),
    skills: ['PHP'],
    image: concessionImage,
    actions: [{ id: 'concession_site', text: 'Lien du GIT', link: 'http://lien-du-site.com', icon: 'GitHub' }],
    singleProjectContent: (
        <>
            <p className='font-semibold text-orange-400'>2022</p>
            <h1 className='mt-2 text-3xl font-bold '>UX / UI Design</h1>
            <div className='flex flex-col gap-4 mt-2 leading-7'>
                <p></p>
            </div>
        </>
    ),
    singleImg: false,
    singleImgUrl: [],
};

export default workConcession;
