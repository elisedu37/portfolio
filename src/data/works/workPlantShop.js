import plantshopImage from '../../assets/portfolio/miniatures/PlantShop.png';

const workPlantShop = {
    id: 'plantshop',
    title: 'PlantShop',
    category: 'Développement',
    date: '2021',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='mr'>
                Ce site a été réalisé pour explorer les bases de React. Il permet de parcourir une liste de produits, et
                l'utilisateur peut interagir avec.
            </p>
            <p className='mr'>
                L'une des principales fonctionnalités est la possibilité d'ajouter et de supprimer des articles du
                panier. Le prix total est calculé automatiquement.
            </p>
            <p>
                Afin de permettre à l'utilisateur de naviguer plus facilement jusqu'au produit qu'il cherche, j'ai
                ajouté un moteur de recherche et un système de filtres qui trient les produits en fonction de leur
                catégorie.
            </p>
            <p>À l'arrivée sur le site, l'utilisateur voit X produits et a la possibilité d'en afficher plus.</p>
        </div>
    ),
    skills: ['React JS'],
    image: plantshopImage,
    actions: [
        { id: 'plantshop_site', text: 'Visiter le site', link: 'https://plant-shop.stackblitz.io/', icon: 'Planet' },
    ],
};

export default workPlantShop;
