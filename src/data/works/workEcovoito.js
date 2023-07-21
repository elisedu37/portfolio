import ecovoitoImage from '../../assets/portfolio/miniatures/miniaEcovoito.png';

const workEcovoito = {
    id: 'ecovoito',
    title: 'Ecovoito',
    category: 'Développement',
    date: '2022',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='m-0 sm:mr-44'>
                Cinq étudiants se sont associés pour monter ce projet. L'objectif était de créer une application visant
                à aider les entreprises à évaluer et à réduire le taux de CO2 émis par les employés lors de leurs
                déplacements entre leur domicile et leur lieu de travail.
            </p>
            <p>
                Pour ma part, je me suis principalement occupé du développement de l'application mobile et de la
                conception des animations en motion design.
            </p>
            <p>
                Le défi technique consistait à créer des itinéraires et à calculer les distances parcourues par les
                utilisateurs. Grâce à ces données, nous avons pu calculer le taux de CO2 émis en fonction du mode de
                transport utilisé et attribuer un score pour les challenges entre entreprises.
            </p>
        </div>
    ),
    skills: ['React Native', 'GitLab', 'After Effects'],
    actions: [
        {
            id: 'demo_ecovoito',
            text: 'Vidéo démo',
            link: 'https://youtu.be/Kk8B4iz_cvA',
            icon: 'YoutubeLogo',
        },
    ],
    image: ecovoitoImage,
    more: true,
    singleProjectContent: (
        <>
            <p className='font-semibold text-orange-400'>2022</p>
            <h1 className='mt-2 text-3xl font-bold '>Développement</h1>
            <div className='flex flex-col gap-4 mt-2 leading-7'>
                <p>
                    <span className='font-semibold'>Compétences : </span>
                    Travail en équipe, développement mobile
                </p>
                <p>
                    <span className='font-semibold'>Outils : </span>
                    GitLab, React Native, Adobe XD
                </p>
                <p>
                    Cinq étudiants se sont associés pour monter ce projet. Durant 6 mois, nous avions pour objectif de
                    développer un outil qui aide une structure à évaluer et à réduire l’empreinte énergétique de son
                    service numérique et/ou de son activité. Partant de cela, le groupe a imaginé une application visant
                    à aider les entreprises à évaluer et à réduire le taux de CO2 émis par les employés lors de leurs
                    déplacements entre leur domicile et leur lieu de travail.
                </p>
                <p>Après avoir trouvé le concept, nous avons :</p>
                <ul>
                    <li>- Rédiger un cahier des charges, en groupe</li>
                    <li>- Donner un nom à notre challenge, en groupe</li>
                    <li>- Définir précisément le concept (règles…), en groupe</li>
                    <li>- Créer une identité visuelle & une charte graphique </li>
                    <li>- Imaginer des maquettes pour l’application et un site internet</li>
                    <li>- Développer l’application</li>
                    <li>- Penser au business plan </li>
                    <li>- Communiquer</li>
                </ul>
                <p>
                    Pour ma part, je me suis principalement occupé du développement de l'application mobile et de la
                    conception des animations en motion design.
                </p>
                <p>
                    Le défi technique consistait à créer des itinéraires et à calculer les distances parcourues par les
                    utilisateurs. Grâce à ces données, nous avons pu calculer le taux de CO2 émis en fonction du mode de
                    transport utilisé et attribuer un score pour les challenges entre entreprises.
                </p>
                <h2>Bilan</h2>
                <p>
                    Ce projet m'a permis de mettre en pratique mes compétences en développement d'application mobile,
                    tout en travaillant en collaboration avec les personnes s'occupant de l'UX/UI dans le but de créer
                    une solution pour réduire de l'empreinte carbone.
                </p>
            </div>
        </>
    ),
    singleImg: true,
    singleImgUrl: [],
};

export default workEcovoito;
