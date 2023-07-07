import { Tabs } from '../../components/Tabs';
import Breadcrumb from '../../components/Breadcrumb';

const Experiences = () => {
    const tabs = [
        {
            title: 'CDI - Logipro',
            content: [
                'Spt 2022 - aujourd’hui - Développement de logiciels e-learning',
                'Spt 2022 - aujourd’hui - Développement de logiciels e-learning',
            ],
        },
        {
            title: 'Alternance - ImAAAgery',
            content: ['Spt 2022 - aujourd’hui - Développement de logiciels e-learning'],
        },
        {
            title: 'Stage - Kogito',
            content: ['Spt 2022 - aujourd’hui - Développement de logiciels e-learning'],
        },
    ];

    return (
        <div className='flex flex-col gap-4 pt-4'>
            <div className='flex flex-col items-center w-full gap-4'>
                <h1>A propos</h1>
                <Breadcrumb />
            </div>
            <section className='flex w-full gap-8 m-auto h-128 max-w-screen-2xl'>
                <Tabs tabs={tabs} />
            </section>
        </div>
    );
};

export default Experiences;
