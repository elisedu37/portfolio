import cafecitoImage from '../../assets/portfolio/miniatures/miniaElCafecito.png';

const workElCafecito = {
    id: 'cafecito',
    title: 'El Cafecito',
    category: 'Communication',
    date: '2021',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='m-0 sm:mr-44'>
                Dans le cadre de mon stage de DUT, j'ai eu l'opportunité de travaillé pour El Cafecito en tant que
                motion designer.
            </p>
            <p className='m-0 sm:mr-44'>
                El Cafecito est un café et atelier de torréfaction situé à Tours, géré par Karla DERENNE, proposant des
                produits provenant du Guatemala.
            </p>
            <p>
                Pour célébrer le cinquième anniversaire de son café, Karla DERENNE souhaitait que j'anime une
                illustration spéciale qu'elle pourrait partager sur les réseaux sociaux, notamment Facebook et
                Instagram.
            </p>
            <p>
                Plusieurs étapes ont été nécessaires à la réalisation de ces vidéos : décomposer l’image PNG fournie par
                la cliente, animer les différents calques, créer un environnement sonore.
            </p>
        </div>
    ),
    skills: ['Illustrator', 'After Effects', 'Premiere Pro'],
    image: cafecitoImage,
    actions: [
        { id: 'cafecito_site', text: 'Voir la vidéo', link: 'https://youtu.be/c4-85unABUU', icon: 'YoutubeLogo' },
    ],
};

export default workElCafecito;
