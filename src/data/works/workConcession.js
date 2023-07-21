import concessionImage from '../../assets/portfolio/miniatures/miniaCarte.png';

const workConcession = {
    id: 'concession',
    title: 'Concession automobile',
    category: 'Développement',
    date: '2020',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='m-0 sm:mr-44'>
                Le projet consiste à développer un logiciel de gestion pour une concession automobile. Ce logiciel
                regroupe les différentes informations, celles concernant les personnes, les véhicules et les achats
                effectués.
            </p>
            <p>
                Les principales fonctionnalités du logiciel sont la gestion des personnes, des véhicules et des achats.
            </p>
            <p>
                Pour chaque, il est possible de lister les éléments existants, d'ajouter de nouveaux éléments, de les
                modifier et de les supprimer.
            </p>
            <p>
                Lors de la suppression d'un élément, le logiciel effectue une vérification pour ne pas impacter les
                autres données. Par exemple, si on supprime un véhicule, cela peut avoir un impact sur les personnes et
                les achats.
            </p>
        </div>
    ),
    skills: ['PHP', 'mySQL', 'CRUD'],
    image: concessionImage,
    actions: [
        {
            id: 'concession_site',
            text: 'Lien du GIT',
            link: 'https://github.com/elisedu37/concession-automobile',
            icon: 'GitHub',
        },
    ],
};

export default workConcession;
