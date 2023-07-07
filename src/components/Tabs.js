import React, { useState } from 'react';

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

const TabContent = ({ tabId, openTab, children }) => {
    return (
        <div className={openTab === tabId ? 'block' : 'hidden'} id={'link' + tabId}>
            <p>{children}</p>
        </div>
    );
};

export const Tabs = ({ tabs }) => {
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
                                    <p>{contenu}</p>
                                ))}
                            </TabContent>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
