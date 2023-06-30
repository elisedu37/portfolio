const Categories = ({ setActiveCategory, categories, activeCategory }) => {
    return (
        <div className='flex flex-row flex-wrap items-start content-center justify-center w-full gap-4 p-4 bg-white'>
            <button
                onClick={() => setActiveCategory('')}
                className={`flex flex-row items-start cursor-pointer p-2 rounded ${
                    activeCategory === '' ? 'bg-[#fee0b3]' : 'bg-gray-200 '
                }`}
            >
                Tout
            </button>
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex flex-row items-start cursor-pointer p-2 rounded ${
                        activeCategory === cat ? 'bg-[#fee0b3]' : 'bg-gray-200'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default Categories;
