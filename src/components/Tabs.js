import React, { useState } from 'react';

/**
 * Rend les onglets et le contenu
 * @param {array} tabs
 * @returns {JSX}
 */
export const Tabs = ({ tabs }) => {
    // Onglet ouvert
    const [openTab, setOpenTab] = useState(1);

    return (
        <div className='flex flex-row flex-wrap w-full gap-8 p-4 bg-white'>
            <ul
                className='flex flex-wrap w-full m-8 text-sm font-medium text-center text-gray-500 border-b border-gray-200'
                role='tablist'
            >
                {tabs.map((tab, index) => (
                    <Tab key={index} tabId={index + 1} title={tab.title} openTab={openTab} setOpenTab={setOpenTab} />
                ))}
            </ul>
            <div className='relative flex flex-col w-full min-w-0 mb-6 break-words '>
                <div className='tab-content tab-space'>
                    {tabs.map((tab, index) => (
                        <TabContent key={index} tabId={index + 1} openTab={openTab}>
                            <div className='flex flex-col gap-8 mx-4 xl:flex-row'>
                                <div className='flex-1'>{tab.content}</div>
                                <div className='flex-1 p-12 -mt-12 -ml-12 lg:sticky lg:top-4 lg:overflow-hidden'>
                                    <div className='grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8'>
                                        {tab.images?.map((img) => (
                                            <img
                                                key={img.key}
                                                src={img.url}
                                                alt={img.alt}
                                                className='bg-gray-100 rounded-lg'
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </TabContent>
                    ))}
                </div>
            </div>
        </div>
    );
};

/**
 * Uniquement l'onglet
 * @param {number} tabId key de la tab
 * @param {string} title titre de la tab
 * @param {number} openTab key de la tab ouverte
 * @param {function} setOpenTab set la tab ouverte
 * @returns {JSX}
 */
const Tab = ({ tabId, title, openTab, setOpenTab }) => {
    return (
        <li>
            <a
                className={'inline-block p-4  rounded-t-lg ' + (openTab === tabId && ' bg-orange-200')}
                onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(tabId);
                }}
                data-toggle='tab'
                href={'#link' + tabId}
                role='tablist'
            >
                {title}
            </a>
        </li>
    );
};

/**
 * Uniquement l'onglet
 * @param {number} tabId key de la tab
 * @param {number} openTab key de la tab ouverte
 * @param {object} children
 * @returns {JSX}
 */
const TabContent = ({ tabId, openTab, children }) => {
    return (
        <div className={openTab === tabId ? 'block' : 'hidden'} id={'link' + tabId}>
            {children}
        </div>
    );
};
