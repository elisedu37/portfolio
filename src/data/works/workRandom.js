import randomImage from '../../assets/portfolio/miniatures/Random.png';

const workRandom = {
    id: 'random',
    title: 'Random Delights',
    category: 'Développement',
    date: '2022',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='mr'>
                Le concept de Random Delights est de proposer de recettes aléatoires et variés aux utilisateurs.
            </p>
            <p className='mr'>
                Pour réaliser ce site, j'utilise l'API "themealdb", qui met à disposition une vaste sélection de
                recettes. Grâce à cette API, les utilisateurs peuvent découvrir de nouveaux plats.
            </p>
            <p>
                Chaque recette présentée est accompagnée d'un aperçu grâce à une image représentative. Le nom de la
                recette, des tags descriptifs, une liste d'ingrédients nécessaires, les instructions de préparation et,
                parfois un lien externe vers une vidéo détaillant la préparation du plat.
            </p>
            <p> Avec une approche, chaque visite sur le site est unique.</p>
        </div>
    ),
    skills: ['React JS'],
    image: randomImage,
    actions: [
        {
            id: 'random_site',
            text: 'Visiter le site',
            link: 'https://random-delights.stackblitz.io/',
            icon: 'Planet',
        },
    ],
};

export default workRandom;
