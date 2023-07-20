import zinoImage from '../../assets/portfolio/miniatures/miniaZino.png';

const workZino = {
    id: 'zino',
    title: 'Zino',
    category: 'Développement',
    date: '2021',
    content: (
        <div>
            <p className='m-0 sm:mr-44'>
                Challenge "intégration web": 1 semaine pour intégrer une maquette en HTML / CSS et créer un thème custom
                sur Wordpress.
            </p>
            <p className='m-0 sm:mr-44'>
                Le thème custom a permis d'avoir une partie administrateur et de créer facilement un site unique. Plus
                tard, mon intégration a été reprise et améliorée pour le site officiel de Zino.
            </p>
        </div>
    ),
    skills: ['Wordpress', 'Woocommerce', 'HTML5 / CSS3'],
    more: true,
    image: zinoImage,
    actions: [{ id: 'zino_site', text: 'Visiter le site', link: 'http://zinoelise.tp.crea.pro/', icon: 'Planet' }],
    singleProjectContent: (
        <>
            <p className='font-semibold text-orange-400'>2023</p>
            <h1 className='mt-2 text-3xl font-bold '>UX / UI Design</h1>
            <div className='flex flex-col gap-4 mt-2 leading-7'></div>
        </>
    ),
    singleImg: true,
    singleImgUrl: [],
};

export default workZino;
