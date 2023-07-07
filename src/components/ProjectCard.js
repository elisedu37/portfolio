const ProjectCard = ({ project, index }) => {
    return (
        <div
            className={`flex flex-col lg:flex-row gap-8 items-stretch ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
        >
            <div className='w-full m-auto h-96 lg:h-full lg:w-96'>
                <img src={project.image} alt='portfolio' className='object-cover w-full' />
            </div>
            <div className='relative flex flex-col items-start flex-1 inline-block w-full gap-4 p-0 pt-6 bg-white'>
                <div className='card'>
                    <p className='font-bold'>Compétences</p>
                    {project?.skills?.map((skill, index) => {
                        return <p key={index}>{skill}</p>;
                    })}
                </div>
                <div className='pastille'></div>
                <h2>{project.title}</h2>
                <div className='flex flex-col gap-4 px-12 py-4 '>
                    <p className='mr-44'>
                        Date du projet : {project.date} | Classification : {project.category}
                    </p>
                    {project?.description?.map((desc, index) => {
                        return (
                            <p key={index} className={`${index === 0 && 'mr-44'}`}>
                                {desc}
                            </p>
                        );
                    })}
                    <div className='flex gap-4'>
                        {project?.actions?.map((action) => {
                            return (
                                <button
                                    className='px-4 py-2 bg-orange-200 rounded w-fit hover:bg-orange-300'
                                    key={action.id}
                                >
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
