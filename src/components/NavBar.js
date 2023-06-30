// Hooks
import { useState } from 'react';
// Transition
import { Transition } from '@headlessui/react';
// Navigation
import { Link } from 'react-router-dom';
import { List, X } from 'phosphor-react';
import Pdf from '../assets/cv-elisegigot.pdf';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative'>
            <div className='sticky top-0 z-50 flex items-center justify-between w-full m-auto'>
                <Link to='/' onClick={() => setIsOpen(false)}>
                    <span className='text-5xl not-italic font-semibold font-dancing'>Elise Gigot .</span>
                </Link>
                <div onClick={toggleMenu}>{isOpen ? <X size={36} /> : <List size={36} />}</div>
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
                <div className='fixed inset-0 z-20 flex items-center justify-center bg-[#fee0b3]'>
                    <ul onClick={toggleMenu} className='flex flex-col gap-24'>
                        <li>
                            <Link to='/about' className='block text-5xl font-dancing'>
                                A propos
                            </Link>
                        </li>
                        <li>
                            <Link to='/projects' className='block text-5xl font-dancing'>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <a href={Pdf} className='block text-5xl font-dancing' target='_blank' rel='noreferrer'>
                                Mon CV
                            </a>
                        </li>
                    </ul>
                </div>
            </Transition>
        </div>
    );
};

export default NavBar;
