/**
 * Dans les projets, filtre par catégorie
 * @param {string} activeCategory nom de la catégorie active
 * @param {function} setActiveCategory permet de setter la catégorie active
 * @param {array} categories tableau qui contient toutes les catégories
 * @returns {JSX}
 */
const Categories = ({ activeCategory, setActiveCategory, categories }) => {
    return (
        <div className='flex flex-row flex-wrap items-start content-center justify-center w-full gap-4 p-4 bg-white'>
            <button
                onClick={() => setActiveCategory('')}
                className={`flex flex-row items-start cursor-pointer p-2 rounded-full px-6 ${
                    activeCategory === '' ? 'bg-[#fee0b3]' : 'bg-gray-200 '
                }`}
            >
                Tout
            </button>
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex flex-row items-start cursor-pointer p-2 rounded-full px-6 ${
                        activeCategory === cat ? 'bg-[#fee0b3] hover:bg-orange-300' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default Categories;
