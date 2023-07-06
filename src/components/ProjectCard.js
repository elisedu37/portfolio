const ProjectCard = ({ project, index }) => {
    return (
        <div
            key={project.id}
            className={`flex flex-col lg:flex-row gap-8 items-stretch ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
        >
            <div className='w-full h-64 lg:w-96 lg:h-96'>
                <img src={project.image} alt='portfolio' className='object-cover w-full h-64 lg:w-96 lg:h-96' />
            </div>
            <div className='flex flex-col items-start flex-1 w-full gap-4 p-0 pt-6 bg-white'>
                <h2>{project.title}</h2>
                <div className='flex flex-col gap-4 px-12 py-4'>
                    <p>Date du projet : 01/02/2022 | Classification : web</p>
                    {project?.description?.map((desc, index) => {
                        return <p key={index}>{desc}</p>;
                    })}
                    <div className='flex gap-4'>
                        {project?.actions?.map((action) => {
                            return (
                                <button className='px-4 py-2 bg-orange-200 rounded w-fit' key={action.id}>
                                    {action.text}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
