// Navigation
import { Link } from 'react-router-dom';

/**
 * Fil d'ariane
 * @param {string} activePage page sur lequel l'utilisateur navigue
 * @param {array} path chemin que l'utilisateur
 * @returns {JSX}
 */
const Breadcrumb = ({ activePage, path }) => {
    return (
        <nav className='flex' aria-label='Breadcrumb'>
            <ol className='inline-flex items-center space-x-1'>
                <li className='inline-flex items-center'>
                    <Link to='/' className='inline-flex items-center text-sm font-medium text-gray-700'>
                        Home /
                    </Link>
                </li>
                {path?.map((item) => (
                    <li key={item.label}>
                        <div className='flex items-center'>
                            <Link to={item.path} className='inline-flex items-center text-sm font-medium text-gray-700'>
                                {item.label} /
                            </Link>
                        </div>
                    </li>
                ))}
                <li aria-current='page'>
                    <div className='flex items-center'>
                        <span className='text-sm font-medium text-gray-500'>{activePage}</span>
                    </div>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumb;
