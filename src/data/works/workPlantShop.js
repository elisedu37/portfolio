import plantshopImage from '../../assets/portfolio/miniatures/PlantShop.png';

const workPlantShop = {
    id: 'plantshop',
    title: 'PlantShop',
    category: 'Développement',
    date: 'XX/XX/XXXX', // Remplacez par la date du projet
    content: <div>{/* Contenu du projet */}</div>,
    skills: ['Compétence 1', 'Compétence 2', 'Compétence 3'], // Remplacez par les compétences du projet
    more: true,
    image: plantshopImage, // Assurez-vous que "plantshop" est correctement importé depuis '../assets/portfolio/miniatures/PlantShop.png'
    actions: [{ id: 'plantshop_site', text: 'Visiter le site', link: 'http://lien-du-site.com', icon: 'Planet' }], // Remplacez par les actions appropriées
    singleProjectContent: <>{/* Contenu détaillé du projet */}</>,
    singleImg: true,
    singleImgUrl: [], // Assurez-vous d'ajouter les URL des images pertinentes pour ce projet
};

export default workPlantShop;
