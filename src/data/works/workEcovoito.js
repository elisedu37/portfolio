import ecovoitoImage from '../../assets/portfolio/miniatures/miniaEcovoito.png';

const workEcovoito = {
    id: 'ecovoito',
    title: 'Ecovoito',
    category: 'Développement',
    date: '2022',
    content: (
        <div>
            <p className='m-0 sm:mr-44'>
                5 étudiants dont 2 designers et 3 développeurs (mon cas) se sont associés pour monter un projet comme
                une start-up. Pour ma part je me suis occupé du développement de l'application. Le défi technique est de
                créer des itinéraires et de calculer cette distance. Par la suite, cette donnée permet de calculer un
                taux de CO2 émis par un mode de transport et un score. En plus de cette mission j'ai aidé à l'animation
                de motion design.
            </p>
        </div>
    ),
    skills: ['React Native', 'Gitlab', 'After Effects'],
    image: ecovoitoImage,
    more: true,
    singleProjectContent: (
        <>
            <p className='font-semibold text-orange-400'>2023</p>
            <h1 className='mt-2 text-3xl font-bold '>UX / UI Design</h1>
            <div className='flex flex-col gap-4 mt-2 leading-7'>
                <p>
                    Le projet Ecovoito a été initié par cinq étudiants, dont deux designers et trois développeurs, dans
                    le but de créer une start-up. En tant que développeur, j'ai joué un rôle clé dans le développement
                    de l'application. Le défi technique principal était de mettre en place des fonctionnalités
                    permettant de générer des itinéraires et de calculer les distances associées.
                </p>
                <p>
                    L'objectif de l'application était de fournir aux utilisateurs un moyen de calculer le taux de CO2
                    émis lors de leurs déplacements en fonction du mode de transport utilisé. En utilisant les données
                    de distance calculées, nous avons pu évaluer l'empreinte carbone associée à chaque mode de transport
                    et attribuer un score environnemental à l'utilisateur.
                </p>
                <p>
                    Outre ma mission de développement, j'ai également apporté mon soutien à l'animation de motion design
                    dans le projet. J'ai utilisé l'outil After Effects pour créer des animations engageantes et
                    visuellement attrayantes, contribuant ainsi à l'expérience utilisateur globale de l'application.
                </p>
                <p>
                    Les outils principaux utilisés pour la réalisation du projet Ecovoito ont été React Native, qui a
                    été utilisé pour développer l'application mobile, et After Effects pour les animations de motion
                    design.
                </p>
                <p>
                    Ce projet a permis à notre équipe de mettre en pratique nos compétences respectives en design et en
                    développement, tout en travaillant en étroite collaboration pour créer une solution innovante axée
                    sur la réduction de l'empreinte carbone. La combinaison de nos talents a permis de développer une
                    application fonctionnelle et attrayante, offrant aux utilisateurs des informations pertinentes sur
                    leurs émissions de CO2 et les encourager à adopter des modes de transport plus respectueux de
                    l'environnement.
                </p>
            </div>
        </>
    ),
    singleImg: true,
    singleImgUrl: [],
};

export default workEcovoito;
