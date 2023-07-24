import retoucheImage from '../../assets/portfolio/miniatures/miniaPhotoshop.png';

const workRetouche = {
    id: 'retouche',
    title: 'Retouche',
    category: 'Communication',
    date: '2022',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='mr'>3 images avec retouche, recoloration </p>
        </div>
    ),
    skills: ['Photoshop'],
    more: true,
    image: retoucheImage,
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

export default workRetouche;
