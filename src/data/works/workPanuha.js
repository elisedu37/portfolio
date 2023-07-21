import pahunaImage from '../../assets/portfolio/miniatures/miniaPahuna.png';

const workPahuna = {
    id: 'pahuna',
    title: 'Pahuna',
    category: 'Communication',
    date: '2022',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='m-0 sm:mr-44'>
                Dans le cadre d'un défi lancé par notre professeur lors du premier cours, nous avons eu 4 heures pour
                créer une publicité présentant une boisson non alcoolisée destinée aux enfants.
            </p>
            <p className='m-0 sm:mr-44'>
                J'ai imaginé une boisson inspirée des saveurs tropicales, exotiques et rafraîchissantes afin d'attirer à
                la fois les enfants et les parents. Le nom de la marque, "Pahuna", va également dans ce sens en
                apportant une touche ludique.
            </p>
            <p>
                Pour la publicité, j'ai opté pour une approche visuelle simple mais dynamique, avec des couleurs vives
                et fantastiques, qui suscitent l'envie de découvrir la boisson.
            </p>
        </div>
    ),
    skills: ['Photoshop'],
    image: pahunaImage,
    actions: [
        {
            id: 'demo_ecovoito',
            text: "Ouvrir l'image",
            link: pahunaImage,
            icon: 'Image',
        },
    ],
};

export default workPahuna;
