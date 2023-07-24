import zinoImage from '../../assets/portfolio/miniatures/miniaZino.png';

const workZino = {
    id: 'zino',
    title: 'Zino',
    category: 'Développement',
    date: '2021',
    content: (
        <div>
            <p className='mr'>
                Le projet Zino a été réalisé dans le cadre d'un challenge d'intégration web. L'objectif était de créer
                en une semaine un site en utilisant une maquette fournie, en intégrant le design en HTML/CSS et en
                développant un thème personnalisé Wordpress.
            </p>
            <p>
                La création d'un thème personnalisé sur Wordpress a été une étape clé du projet. Cela a permis de mettre
                en place une partie administrative permettant de gérer facilement le contenu du site et de le
                personnaliser selon les besoins spécifiques de Zino.
            </p>
            <p>Plus tard, mon intégration a été reprise et améliorée pour le site officiel de Zino.</p>
        </div>
    ),
    skills: ['Wordpress', 'Woocommerce', 'HTML5 / CSS3'],
    more: true,
    image: zinoImage,
    actions: [{ id: 'zino_site', text: 'Visiter le site', link: 'http://zinoelise.tp.crea.pro/', icon: 'Planet' }],
    singleProjectContent: (
        <>
            <p className='font-semibold text-orange-400'>2023</p>
            <h1 className='mt-2 text-3xl font-bold '>UX / UI Design</h1>
            <div className='flex flex-col gap-4 mt-2 leading-7'>
                <p>
                    Le projet Zino a été réalisé dans le cadre d'un challenge d'intégration web. L'objectif était de
                    créer un site en utilisant une maquette fournie, en intégrant le design en HTML/CSS et en
                    développant un thème personnalisé sur la plateforme Wordpress.
                </p>
                <p>
                    Le défi était de taille, avec une contrainte de temps de seulement une semaine pour mener à bien
                    l'intégration. Malgré cela, j'ai réussi à intégrer la maquette en respectant les spécifications et
                    en veillant à ce que le site soit responsive, offrant une expérience utilisateur optimale sur
                    différents appareils.
                </p>
                <p>
                    La création d'un thème personnalisé sur Wordpress a été une étape clé du projet. Cela a permis de
                    mettre en place une partie administrative permettant de gérer facilement le contenu du site et de le
                    personnaliser selon les besoins spécifiques de Zino. Le thème personnalisé a également contribué à
                    donner au site une identité unique et correspondant à la vision de Zino.
                </p>
                <p>
                    Le projet initial, réalisé dans le cadre du challenge, a été un succès. Il a par la suite été repris
                    et amélioré pour devenir le site officiel de Zino. Cette évolution a pu bénéficier des retours des
                    utilisateurs et des besoins spécifiques de l'entreprise. L'intégration a été affinée et des
                    fonctionnalités supplémentaires ont été ajoutées pour offrir une expérience utilisateur encore
                    meilleure.
                </p>
                <p>
                    Les outils principaux utilisés pour la réalisation du projet ont été Wordpress, qui a servi de
                    plateforme pour le développement du site, et Woocommerce, une extension de Wordpress permettant de
                    gérer la partie e-commerce du site. Les technologies HTML5 et CSS3 ont été utilisées pour
                    l'intégration du design et la mise en forme du contenu.
                </p>
                <p>
                    Le projet Zino a été une occasion de relever un défi d'intégration web en respectant des contraintes
                    de temps, tout en développant un thème personnalisé sur Wordpress. Il a permis de créer un site
                    unique pour Zino, qui a ensuite été amélioré pour devenir leur site officiel, offrant une expérience
                    utilisateur agréable et une gestion facile du contenu.
                </p>
            </div>
        </>
    ),
    singleImg: true,
    singleImgUrl: [],
};

export default workZino;
