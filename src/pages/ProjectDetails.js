import React from 'react';
//  Datas
import { projects } from '../data/projects';
// Navigation
import { useParams } from 'react-router';

/**
 * Page single project
 * @returns {JSX}
 */
const ProjetDetail = () => {
    // récupère l'id présente dans le link
    let { id } = useParams();
    // on récupère les infos du projet
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
