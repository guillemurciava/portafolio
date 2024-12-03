import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



function Projects() {
    const proyectos = [
        {Nombre:'Sistema Administrativo',
        descripcion:'Aplicación de Control Administrativo',
        link:'https://github.com/guillemurciava/cousera-test'
        },
        {Nombre:'Sistema para reservaciones de habitaciones',
        descripcion:'Aplicación que gestiona las habitaciones disponibles y reservaciones de las mismas',
        link:'https://github.com/guillemurciava/pokeapp'
        },
        {Nombre:'Control de Inventario',
        descripcion:'Aplicación que gestiona las existencias de repuestos en una tienda',
        link:'https://github.com/guillemurciava/fullstack-course4'
        }
    ];
    return (
       <section className="projects">
        <h2>

        </h2>
        <div className="projects-grid">
            {
                proyectos.map((proyecto, index) =>(
                    <div key={index} className="project-card">
                        <h3>
                            {proyecto.Nombre}
                        </h3>
                        <p>
                            {proyecto.descripcion}
                        </p>
                        <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="3x"/>
                        </a>
                    </div>
                 )
                )
            }
        </div>
       </section>
    );
}
export default Projects;