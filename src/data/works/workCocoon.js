import cocoonImage from '../../assets/portfolio/miniatures/miniaCocoonMoi.png';

const workCocoon = {
    id: 'cocoonmoi',
    title: 'Cocoon Moi',
    category: 'Développement',
    date: '2021',
    content: (
        <div className='flex flex-col gap-4'>
            <p className='m-0 sm:mr-44'>
                "Cocoon Moi" est un projet tutoré d'une durée d'un an réalisé lors de mon DUT MMI (Métiers du Multimédia
                et de l'Internet). Par équipe de deux, nous devions aider notre commanditaire.
            </p>
            <p className='m-0 sm:mr-44'>
                Nos missions étaient les suivantes : créer le cahier des charges, définir le nom de l'entreprise, le
                logo, sa charte graphique, imaginer le site vitrine et établir un plan de communication.
            </p>
            <p>
                Ces éléments avaient pour but d'aider notre commanditaire à développer son activité de massage pour
                bébé.
            </p>
            <p>
                Depuis, notre commanditaire utilise quotidiennement nos visuels et a réussi à passer d'une activité
                occasionnelle à son travail à temps plein.
            </p>
        </div>
    ),
    skills: ['Identité visuelle', 'UX / UI Design', 'Bootstrap'],
    more: true,
    image: cocoonImage,
    actions: [{ id: 'cocoon_site', text: 'Visiter le site', link: 'https://www.cocoonmoi.fr/', icon: 'Planet' }],
    singleProjectContent: (
        <>
            <p className='font-semibold text-orange-200'>2021</p>
            <h1 className='mt-2 text-3xl font-bold '>Développement</h1>
            <div className='flex flex-col gap-4 mt-4 leading-7'>
                <p>
                    <span className='font-semibold'>Compétences : </span>
                    Identité visuelle, conception d'interfaces et développement
                </p>
                <p>
                    <span className='font-semibold'>Outils : </span>
                    Figma, HTML, CSS, Boostrap, Illustrator, Canva
                </p>
                <p className='m-0 sm:mr-44'>
                    "Cocoon Moi" est un projet tutoré d'une durée d'un an réalisé lors de mon DUT MMI (Métiers du
                    Multimédia et de l'Internet). En équipe de deux, nous avions pour mission d'aider notre
                    commanditaire.
                </p>
                <p>
                    Nos missions étaient les suivantes : créer le cahier des charges, définir le nom de l'entreprise,
                    concevoir le logo et sa charte graphique, imaginer le site vitrine et établir un plan de
                    communication.
                </p>
                <p>
                    Ces éléments avaient pour but d'aider notre commanditaire à développer son activité de massage pour
                    bébé.
                </p>
                <h2>En détail</h2>
                <p>
                    <span className='font-semibold'> 1. Créer un cahier des charges : </span>
                    lors de la conception de ce document, nous avons défini et compris plus en détail les besoins et les
                    objectifs de notre commanditaire. Ce cahier des charges nous a servi de guide pour l'ensemble des
                    missions, par exemple la création de la marque et du site web.
                </p>
                <p>
                    <span className='font-semibold'> 2. Définir le nom de l'entreprise : </span>
                    nous avons brainstormé et exploré différentes options pour trouver un nom représentatif de son
                    activité de massage pour bébé. Après plusieurs échanges, nous avons déterminé le nom "Cocoon Moi",
                    qui évoquait l'ambiance et les valeurs de l'entreprise.
                </p>
                <p>
                    <span className='font-semibold'> 3. Créer un logo et sa charte graphique : </span>
                    la demande était simple, le logo devait représenter un bébé, la douceur et le confort, avec des
                    couleurs apaisantes. La charte graphique, quant à elle, devait comprendre les typographies, les
                    couleurs et des visuels, etc.
                </p>
                <p>
                    <span className='font-semibold'> 4. Créer un site vitrine : </span>
                    pour présenter l'activité de massage pour bébé, les services proposés, les informations sur Mme
                    Christine Barge et les témoignages, j'ai pris en charge intégralement cette partie. Pour cela, j'ai
                    utilisé Bootstrap. J'ai veillé à retranscrire les mêmes valeurs que dans l'identité visuelle et à ce
                    que le site soit convivial, esthétiquement agréable et facile à naviguer.
                </p>
                <p>
                    <span className='font-semibold'> 5. Établir un plan de communication digitale et print : </span>
                    nous avons créé des visuels à l'aide de Canva, pour la création de cartes de visite, de flyers, etc.
                    Pour les réseaux sociaux, nous avons indiqué le fonctionnement et les bonnes pratiques à appliquer.
                </p>
                <h2>Bilan</h2>
                <p>
                    Depuis, notre commanditaire utilise quotidiennement nos visuels et a réussi à passer d'une activité
                    occasionnelle à son travail à temps plein.
                </p>
            </div>
        </>
    ),
    singleImg: false,
    singleImgUrl: [],
};

export default workCocoon;
