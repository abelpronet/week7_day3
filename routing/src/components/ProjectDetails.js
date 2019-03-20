import React from 'react';
import { myProjects } from './Projects';
import { Link } from 'react-router-dom';
import queryString from 'query-string'


const projectDetails = props => {

    const getProject = id => {
        const theProject = oneProject => {
            return oneProject.id === id;
        }
        return myProjects.find(theProject)
    };

    const foundProject = getProject(props.match.params.id)

    // Accede a http://localhost:3000/projects/1a?color=red&name=popino&city=madrid
    const query = queryString.parse(props.location.search)

    return (
        <div>
            <h2>{foundProject.name} <span style={{ fontSize: "14px" }}>{foundProject.year}</span></h2>
            <h3>Used technologies: {foundProject.technologies}</h3>
            <p>{foundProject.description}</p>
            <p>{query.color}</p>
            <p>{query.name}</p>
            <p>{query.city}</p>
            <Link to='/projects'>Back</Link>
        </div>
    )
}

export default projectDetails;