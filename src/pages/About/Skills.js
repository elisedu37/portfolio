import Breadcrumb from '../../components/Breadcrumb';
import CardTemplate from '../../components/CardTemplate';
import code from '../../assets/illustrations/Code.png';

const Skills = () => {
    const skills = [
        {
            id: 'dev',
            title: 'Développement web',
            description: [
                "Je suis passionnée par le développement web depuis le collège. J’ai commencé par coder de simples sites statiques en HTML / CSS, puis j'ai acquis des compétences en JavaScript, React JS, PHP, Wordpress... Mes compétences me permettent de créer des sites variés : vitrine, e-commerce…",
                "Par exemple, en 2021 lors de mon alternance, j’ai conçu un site e-commerce pour une marque de lunettes. Le principe était de vendre des montures de manière ludique en utilisant le même principe que les réseaux sociaux (Instagram). J’ai utilisé React pour le front Wordpress pour le back. Grâce à des requêtes API, j’ai fait communiquer les deux parties. Mon développement a permis de visualiser les produits sous la forme d’une mosaïque d'images aléatoires. A ce jour, le site n’est pas accessible au grand public. ",
            ],
            techno: 'HTML - CSS - JS | API | PHP - Symfony | Wordpress - Woocommerce | React JS - native',
            image: code,
        },
        {
            id: 'design',
            title: 'UX / UI',
            description: [
                "Depuis plus de deux ans, je m’intéresse à l'UX/UI. J’ai pris conscience de l’importance de l’interface et du parcours utilisateur. L’utilisateur est au centre de mes préoccupations. J’essaie de créer des interfaces intuitives, esthétiques et faciles à utiliser.",
                'Pour réaliser mes wireframes et mes maquettes, j’utilise principalement Figma mais il m’est déjà arrivé de travailler sur Adobe XD.',
            ],
            techno: 'Conception UX/UI, wireframing, maquettes, Figma, Adobe XD',
            image: code,
        },
        {
            id: 'other',
            title: 'Autre',
            description: [
                'J’aime aussi la création vidéo et le motion design. Lors de mon parcours, j’ai participé à la réalisation de trois courts métrages. J’ai également pu appliquer et développer mes compétences en animation lors de mon stage de fin d’année pour mon DUT Métiers du multimédia et de l’internet.',
                'J’utilise des logiciels tels que Premiere Pro, DaVinci Resolve et After Effects. ',
                "Dans la même continuité, je m'intéresse au domaine du marketing digital. Par exemple, j'ai participé à la conception d'une stratégie digitale pour la version premium de l'application Yuka en 2021 (dans un contexte fictif). Cela m'a permis d’appliquer mes compétences en design graphique, en communication et en motion design.",
            ],
            techno: 'Photoshop Illustrator InDesign | Premiere Pro DaVinci Resolve After Effects Tournage & montage',
            image: code,
        },
    ];

    return (
        <div className='flex flex-col gap-4 pt-4'>
            <div className='flex flex-col items-center w-full gap-4'>
                <h1>Mes compétences</h1>
                <Breadcrumb />
            </div>
            <section id='projects' className='flex flex-col gap-8 m-auto max-w-screen-2xl'>
                {skills?.map((skill, index) => {
                    return (
                        <CardTemplate index={index} key={skill.id} image={skill.image}>
                            <h2>{skill.title}</h2>
                            <div className='flex flex-col gap-4 px-12 py-4 '>
                                {skill?.description?.map((desc, index) => {
                                    return <p key={index}>{desc}</p>;
                                })}
                                <p>{skill.techno}</p>
                            </div>
                        </CardTemplate>
                    );
                })}
            </section>
        </div>
    );
};

export default Skills;
