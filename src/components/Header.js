import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='bg-white border-gray-200'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link
                    to='/'
                    className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 '
                >
                    <span className='self-center text-2xl font-semibold whitespace-nowrap'>Scan</span>
                </Link>

                <div className='w-full md:w-auto' id='navbar-default'>
                    <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white '>
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
            </div>
        </nav>
    );
}

export default Header;
