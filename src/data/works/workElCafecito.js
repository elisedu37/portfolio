import cafecitoImage from '../../assets/portfolio/miniatures/miniaElCafecito.png';

const workElCafecito = {
    id: 'cafecito',
    title: 'Cafecito',
    category: 'Développement',
    date: 'XX/XX/XXXX', // Remplacez par la date du projet
    content: <div>{/* Contenu du projet */}</div>,
    skills: ['Compétence 1', 'Compétence 2', 'Compétence 3'], // Remplacez par les compétences du projet
    more: true,
    image: cafecitoImage, // Assurez-vous que "cafecito" est correctement importé depuis '../assets/portfolio/miniatures/miniaElCafecito.png'
    actions: [{ id: 'cafecito_site', text: 'Visiter le site', link: 'http://lien-du-site.com', icon: 'Planet' }], // Remplacez par les actions appropriées
    singleProjectContent: <>{/* Contenu détaillé du projet */}</>,
    singleImg: true,
    singleImgUrl: [], // Assurez-vous d'ajouter les URL des images pertinentes pour ce projet
};

export default workElCafecito;
