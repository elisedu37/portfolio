import newEcovoito from '../../assets/portfolio/miniatures/NewEcovoito.png';

const workNewEcovoito = {
    id: 'refonteEcovoito',
    title: 'Ecovoito, la refonte',
    type: 'perso',
    category: 'UX / UI Design',
    date: '2023',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='mr'>
                Un an avant, avec 4 autres étudiants nous avons imaginé Ecovoito. L'objectif était de créer une
                application visant à aider les entreprises à évaluer et à réduire le taux de CO2 émis par les employés
                lors de leurs déplacements entre leur domicile et leur lieu de travail. A ce moment là, je m'étais
                principalement occupé du développement de l'application.
            </p>
            <p>
                J'ai décidé de repenser l'UI/UX de l'application Ecovoito pour obtenir une meilleure expérience
                utilisateur et un résultat plus professionnel.
            </p>
            <p>
                J'ai également créer un site vitrine dans le même univers graphique et améliorer le back-office destiné
                aux entreprises
            </p>
        </div>
    ),
    skills: ['Prototypage', 'Conception UI', 'Figma'],
    actions: [
        {
            id: 'carte_maquette',
            text: 'Découvrir les maquettes',
            link: 'https://www.figma.com/proto/6sIM4vRxr7gpustfwkUtLF/Mes-maquettes?type=design&node-id=804-4399&t=w44bS7PkFhc9aPMq-1&scaling=scale-down&page-id=804%3A1892&starting-point-node-id=804%3A4399&mode=design',
            icon: 'FigmaLogo',
        },
    ],
    image: newEcovoito,
    more: true,
    singleProjectContent: (
        <>
            <p className='font-semibold text-orange-400'>2023</p>
            <h1 className='mt-2 text-3xl font-bold '>UX / UI Design</h1>
            <div className='flex flex-col gap-4 mt-2 leading-7'>
                <p>Objectifs clés de la refonte :</p>
                <p>
                    Simplification de la navigation : Nous allons revoir l'architecture de l'application et du site pour
                    faciliter la navigation des utilisateurs. Cela inclut la création de menus clairs, d'une hiérarchie
                    de contenu cohérente et de boutons d'action intuitifs.
                </p>
                <p>
                    Design attractif et cohérent : Nous allons adopter un design moderne et attrayant, en utilisant des
                    couleurs, des typographies et des visuels qui reflètent l'esprit écologique et durable d'Ecovoito.
                    L'objectif est de créer une identité visuelle cohérente et mémorable.
                </p>
                <p>
                    Optimisation des processus d'échange : Nous allons simplifier le processus d'échange de trajets
                    domicile-travail en rendant les étapes claires et intuitives. Cela inclut la création de formulaires
                    de réservation conviviaux, la visualisation des trajets disponibles sur une carte interactive et
                    l'envoi de notifications aux utilisateurs pour les informer des mises à jour.
                </p>
                <p>
                    Amélioration de la communication entre utilisateurs : Nous allons intégrer une messagerie
                    instantanée qui permettra aux utilisateurs de communiquer facilement et en temps réel pour organiser
                    les détails de leurs trajets. Cela facilitera la coordination et renforcera la confiance entre les
                    utilisateurs.
                </p>
                <p>
                    Optimisation de la version mobile : Nous allons nous assurer que l'application et le site internet
                    sont entièrement responsives, offrant une expérience utilisateur optimale sur les appareils mobiles.
                    Cela permettra aux utilisateurs d'accéder à Ecovoito de n'importe où et à tout moment.
                </p>
            </div>
        </>
    ),
    singleImg: false,
    singleImgUrl: [],
};

export default workNewEcovoito;
