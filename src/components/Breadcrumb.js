// Navigation
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
    return (
        <nav className='flex' aria-label='Breadcrumb'>
            <ol className='inline-flex items-center space-x-1'>
                <li className='inline-flex items-center'>
                    <Link to='/' className='inline-flex items-center text-sm font-medium text-gray-700'>
                        Home /
                    </Link>
                </li>
                <li aria-current='page'>
                    <div className='flex items-center'>
                        <span className='text-sm font-medium text-gray-500'>Portfolio</span>
                    </div>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumb;
