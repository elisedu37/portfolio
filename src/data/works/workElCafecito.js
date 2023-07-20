import cafecitoImage from '../../assets/portfolio/miniatures/miniaElCafecito.png';

const workElCafecito = {
    id: 'cafecito',
    title: 'Cafecito',
    category: 'Communication',
    date: '2022',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='m-0 sm:mr-44'>
                El Cafecito est un café et atelier de torréfaction à Tours, tenu par Karla DERENNE. Les produits
                proposés sont originaires du Guatemala. Pour les cinq ans de son café, la cliente souhaite que j’anime
                une illustration afin de la poster sur les réseaux sociaux (Facebook et Instagram).
            </p>
        </div>
    ),
    skills: ['Photoshop', 'Illustrator', 'After Effects'],
    more: true,
    image: cafecitoImage,
    actions: [{ id: 'cafecito_site', text: 'Visiter le site', link: 'http://lien-du-site.com', icon: 'Planet' }],
    singleProjectContent: (
        <>
            <p className='font-semibold text-orange-400'>2022</p>
            <h1 className='mt-2 text-3xl font-bold '>UX / UI Design</h1>
            <div className='flex flex-col gap-4 mt-2 leading-7'>
                <p>
                    Dans le cadre du projet El Cafecito, j'ai eu l'opportunité de travailler en tant que motion
                    designer. El Cafecito est un café et atelier de torréfaction situé à Tours, géré par Karla DERENNE,
                    proposant des produits provenant du Guatemala.
                </p>
                <p>
                    Pour célébrer le cinquième anniversaire de son café, Karla DERENNE souhaitait que j'anime une
                    illustration spéciale qu'elle pourrait partager sur les réseaux sociaux, notamment Facebook et
                    Instagram.
                </p>
                <p>
                    Les outils que j'ai utilisés pour réaliser cette animation étaient Illustrator, After Effects et
                    Premiere Pro. J'ai commencé par créer une illustration mettant en valeur l'ambiance chaleureuse et
                    authentique d'El Cafecito, en y intégrant des éléments représentatifs de la culture guatémaltèque et
                    du café.
                </p>
                <p>
                    Ensuite, j'ai utilisé After Effects pour donner vie à cette illustration. J'ai créé des mouvements
                    fluides, des transitions élégantes et des effets visuels attrayants pour capturer l'attention des
                    spectateurs et transmettre l'essence et l'atmosphère uniques d'El Cafecito.
                </p>
                <p>
                    Enfin, j'ai utilisé Premiere Pro pour monter l'animation avec une musique d'ambiance appropriée, en
                    veillant à ce que le rythme et la durée de l'animation correspondent aux besoins des réseaux
                    sociaux.
                </p>
                <p>
                    Ce projet m'a permis de mettre en pratique mes compétences en motion design et de contribuer à la
                    promotion d'El Cafecito à travers une animation attrayante et engageante. En utilisant des outils
                    tels qu'Illustrator, After Effects et Premiere Pro, j'ai pu créer une animation de qualité
                    professionnelle qui reflète l'identité unique d'El Cafecito et captive l'attention du public sur les
                    réseaux sociaux.
                </p>
            </div>
        </>
    ),
    singleImg: false,
    singleImgUrl: [],
};

export default workElCafecito;
