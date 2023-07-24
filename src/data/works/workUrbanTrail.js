import urbanImage from '../../assets/portfolio/miniatures/miniaUrbanTrail.png';

const workUrbanTrail = {
    id: 'urban',
    title: 'Urban Trail',
    category: 'UX / UI Design',
    date: '2022',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='mr'>
                projet avec lequel j'ai commencé ... maquette du site internet, analyse de la demande, support de
                communication
            </p>
        </div>
    ),
    skills: ['Adobe XD', 'Wireframe', 'Conception UI'],
    more: true,
    image: urbanImage,
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

export default workUrbanTrail;
