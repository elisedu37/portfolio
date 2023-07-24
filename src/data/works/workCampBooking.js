import randomImage from '../../assets/portfolio/miniatures/Random.png';

const workCampBooking = {
    id: 'campbooking',
    title: 'Campbooking',
    category: 'Développement',
    date: '2022',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='mr'>
                Ce projet, m'a permis de créer un site de gestion de réservations pour un camping en utilisant React et
                Redux.
            </p>
            <p className='mr'>
                Les fonctionnalités principales sont : la possibilité de lister, d'ajouter, supprimer et éditer une
                réservation. On peut également gérer le statut des réservations : "non payées" ou "payées".
            </p>
            <p>
                J'ai mis en place un système de filtre, facilitant la recherche des réservations selon leur statut. On
                peut trier rapidement la liste de réservations par état, améliorant l'efficacité de la gestion.
            </p>
        </div>
    ),
    skills: ['React JS', 'Redux'],
    image: randomImage,
    actions: [
        { id: 'random_site', text: 'Visiter le site', link: 'https://campbooking.stackblitz.io/', icon: 'Planet' },
    ],
};

export default workCampBooking;
