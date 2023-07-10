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
        <div className='w-full'>
            <ul className='flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none' role='tablist'>
                {tabs.map((tab, index) => (
                    <Tab key={index} tabId={index + 1} title={tab.title} openTab={openTab} setOpenTab={setOpenTab} />
                ))}
            </ul>
            <div className='relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-sm'>
                <div className='flex-auto px-4 py-5'>
                    <div className='tab-content tab-space'>
                        {tabs.map((tab, index) => (
                            <TabContent key={index} tabId={index + 1} openTab={openTab}>
                                {tab.content.map((contenu, index) => (
                                    <p key={index}>{contenu}</p>
                                ))}
                            </TabContent>
                        ))}
                    </div>
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
        <li className='flex-auto mr-2 -mb-px text-center last:mr-0'>
            <a
                className={
                    'text-xs font-bold uppercase px-5 py-3 shadow-sm rounded block leading-normal ' +
                    (openTab === tabId ? 'bg-orange-200' : 'bg-white')
                }
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
