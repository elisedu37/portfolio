// Hooks
import { useState } from 'react';
// Transition
import { Transition } from '@headlessui/react';
// Navigation
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative'>
            <div className='flex w-full justify-between m-auto sticky top-0 z-50'>
                <Link
                    to='/'
                    className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 '
                >
                    <span className='self-center text-2xl font-semibold whitespace-nowrap'>Scan</span>
                </Link>
                <div onClick={toggleMenu}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
                    </svg>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter='transition-opacity duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
            >
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20'>
                    <ul>
                        <li>
                            <Link
                                to='/'
                                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 '
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/about'
                                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 '
                            >
                                about
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/projects'
                                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 '
                            >
                                projets
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </div>
    );
};

export default NavBar;
