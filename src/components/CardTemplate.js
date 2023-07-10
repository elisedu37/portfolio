/**
 * Template de carte 2 colonnes : image et contenu
 * @param {string} index identifiant unique
 * @param {string} image url de l'image
 * @param {object} children contenu de la carte
 * @returns {JSX}
 */
const CardTemplate = ({ index, image, children }) => {
    return (
        <div
            className={`flex flex-col lg:flex-row gap-8 items-stretch ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
        >
            <div className='hidden w-full m-auto bg-white h-96 lg:h-full lg:w-96 lg:flex'>
                <img src={image} alt='portfolio' className='object-cover w-full' />
            </div>
            <div className='relative flex flex-col items-start flex-1 w-full gap-4 p-0 pt-6 bg-white'>{children}</div>
        </div>
    );
};

export default CardTemplate;
