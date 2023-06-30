import { GithubLogo, LinkedinLogo } from 'phosphor-react';

const Footer = () => {
    return (
        <footer>
            <div className='w-full mx-auto md:flex md:items-center md:justify-between'>
                <span className='text-sm'>© 2023 . All Rights Reserved.</span>
                <div className='flex flex-wrap items-center'>
                    <LinkedinLogo size={36} />
                    <GithubLogo size={36} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
