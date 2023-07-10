// Icones
import { GithubLogo, LinkedinLogo } from 'phosphor-react';
// Navigation
import { Link } from 'react-router-dom';

/**
 * Pied de page
 * @returns {JSX}
 */
const Footer = () => {
    return (
        <footer className='pt-8 m-auto max-w-screen-2xl'>
            <div className='w-full mx-auto md:flex md:items-center md:justify-between'>
                <span>
                    © 2023 Elise GIGOT. | Tous droits réservés. |<Link to='/legacy'> Mentions légales</Link>
                </span>
                <div className='flex flex-wrap items-center'>
                    <a
                        href='https://www.linkedin.com/in/elise-gigot/'
                        className='linkedin'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <LinkedinLogo size={32} />
                    </a>
                    <a href='https://github.com/elisedu37' className='instagram' target='_blank' rel='noreferrer'>
                        <GithubLogo size={32} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
