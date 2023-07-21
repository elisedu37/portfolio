// Composants
import Breadcrumb from '../components/Breadcrumb';

/**
 * Page pour les mentions légales
 * @returns {JSX}
 */
const Legacy = () => {
    return (
        <section className='flex flex-col w-full p-5 m-auto max-w-screen-2xl' id='legacy'>
            <div className='flex flex-col items-center w-full gap-4'>
                <h1>A propos</h1>
                <Breadcrumb activePage='A propos' />
            </div>
            <p className='mt-4'>
                1. Éditeur du site : Nom et Prénom : [Votre nom complet] Adresse : [Votre adresse complète] Adresse
                e-mail : [Votre adresse e-mail]
            </p>
            <p>
                2. Hébergement du site : Nom de l'hébergeur : [Nom de l'hébergeur] Adresse : [Adresse de l'hébergeur]
                Téléphone : [Numéro de téléphone de l'hébergeur]
            </p>
            <p>
                3. Propriété intellectuelle : Tous les éléments du site (textes, images, logos, etc.) sont la propriété
                exclusive de [Votre nom complet], à l'exception des éléments fournis par des tiers sous licence ou dans
                le domaine public. Toute reproduction, distribution ou utilisation sans autorisation préalable est
                strictement interdite. Tous les contenus présents sur ce site, tels que le texte, les images, les
                vidéos, les graphiques, les logos, les icônes, les clips audio, ainsi que leur agencement et leur
                présentation, sont la propriété intellectuelle de Yumicode et sont protégés par les lois sur le droit
                d'auteur et les traités internationaux. Toute utilisation non autorisée ou reproduction de ces contenus,
                en tout ou en partie, est strictement interdite, sauf indication contraire. Cela inclut la copie, la
                modification, la distribution, la diffusion, la publication ou l'exploitation des contenus sans
                l'autorisation écrite préalable de Yumicode. Dans certains cas, ce site peut utiliser des ressources
                provenant de banques d'images gratuites, telles que Freepik, Pixabay, etc. Ces ressources sont soumises
                aux conditions d'utilisation spécifiques de ces plateformes et sont fournies sous licence ou avec les
                autorisations appropriées. Les droits d'auteur de ces ressources restent la propriété de leurs auteurs
                respectifs. Si vous pensez que tout contenu de ce site viole vos droits de propriété intellectuelle,
                veuillez nous contacter immédiatement avec les informations pertinentes, et nous prendrons les mesures
                nécessaires pour remédier à la situation. Nous vous remercions de respecter nos droits de propriété
                intellectuelle ainsi que les droits des auteurs de toutes les ressources utilisées sur ce site.{' '}
            </p>
            <p>
                4. Responsabilité : Le contenu présenté sur ce site est fourni à titre informatif uniquement. Malgré
                tous nos efforts pour assurer l'exactitude des informations, nous ne pouvons garantir l'absence
                d'erreurs ou d'omissions. En conséquence, [Votre nom complet] décline toute responsabilité quant aux
                éventuels dommages directs ou indirects résultant de l'utilisation du site.
            </p>
            <p>
                5. Liens externes : Ce site peut contenir des liens vers des sites web tiers. [Votre nom complet]
                n'exerce aucun contrôle sur le contenu de ces sites et décline toute responsabilité quant à leur contenu
                ou à leur utilisation.
            </p>
            <p>
                6. Cookies : Ce site utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur ce
                site, vous acceptez l'utilisation de cookies conformément à notre politique en matière de cookies. Vous
                pouvez désactiver les cookies dans les paramètres de votre navigateur si vous le souhaitez.
            </p>
            <p>
                7. Données personnelles : Les données personnelles collectées sur ce site sont traitées conformément à
                notre politique de confidentialité. En utilisant ce site, vous consentez à la collecte et au traitement
                de vos données personnelles selon les termes de notre politique de confidentialité.
            </p>
            <p>
                8. Modifications des mentions légales : [Votre nom complet] se réserve le droit de modifier ces mentions
                légales à tout moment. Les modifications prendront effet dès leur publication sur le site. Il vous est
                conseillé de consulter régulièrement cette page pour vous tenir informé des éventuelles mises à jour.
            </p>
        </section>
    );
};

export default Legacy;
