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
            <div className='w-full m-auto overflow-hidden rounded h-96 lg:h-max lg:w-96'>
                <div className='transition-transform duration-500 ease-in-out transform h-max hover:scale-110'>
                    <img src={image} alt='' className='object-cover w-full h-max' />
                </div>
            </div>
            <div className='relative flex flex-col items-start flex-1 w-full gap-4 p-0 pt-6 bg-white'>{children}</div>
        </div>
    );
};

export default CardTemplate;
