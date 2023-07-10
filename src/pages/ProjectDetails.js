import React from 'react';
import { projects } from '../data/projects';
import { useParams } from 'react-router';

const ProjetDetail = () => {
    let { id } = useParams();
    const project = projects.find((project) => project.id === id);

    return (
        <div>
            {project ? (
                <>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <img src={project.image} alt={project.title} />
                </>
            ) : (
                <>Pas de projets</>
            )}
        </div>
    );
};

export default ProjetDetail;
