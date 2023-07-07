import React, { useState } from 'react';

const Tab = ({ tabId, title, color, openTab, setOpenTab }) => {
    return (
        <li className='flex-auto mr-2 -mb-px text-center last:mr-0'>
            <a
                className={
                    'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                    (openTab === tabId ? 'text-white bg-' + color + '-600' : 'text-' + color + '-600 bg-white')
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

const Tabs = ({ color, tabs }) => {
    const [openTab, setOpenTab] = useState(1);

    return (
        <div className='flex flex-wrap'>
            <div className='w-full'>
                <ul className='flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none' role='tablist'>
                    {tabs.map((tab, index) => (
                        <Tab
                            key={index}
                            tabId={index + 1}
                            title={tab.title}
                            color={color}
                            openTab={openTab}
                            setOpenTab={setOpenTab}
                        />
                    ))}
                </ul>
                <div className='relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg'>
                    <div className='flex-auto px-4 py-5'>
                        <div className='tab-content tab-space'>
                            {tabs.map((tab, index) => (
                                <TabContent key={index} tabId={index + 1} openTab={openTab}>
                                    {tab.content}
                                </TabContent>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function TabsRender() {
    const tabs = [
        {
            title: 'Profile',
            content:
                'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
        },
        {
            title: 'Settings',
            content:
                'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
        },
        {
            title: 'Options',
            content:
                'Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.',
        },
    ];

    return <Tabs color='black' tabs={tabs} />;
}
