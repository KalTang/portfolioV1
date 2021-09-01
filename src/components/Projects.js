import React, { Component } from 'react';
import { FiGithub } from 'react-icons/fi';
import projects from '../Data/ProjectData';
import ProjectData from '../Data/ProjectData';
import Typical from 'react-typical';

export default class Projects extends Component {
    state = { projects: [] };
    componentDidMount() {
        this.setState({ projects: ProjectData });
        console.log(projects);
    }

    render() {
        return (
            <div className="projects-container">
                <video src="/Videos/video-1.mp4" autoPlay loop muted></video>
                <h1 className="projects-title">
                    <Typical wrapper="b" steps={[1000, 'My Projects']} />
                </h1>

                <div className="project row">
                    {projects.map((p) => {
                        return (
                            <div
                                className="card text-center col-sm-12 col-md-6 col-lg-3"
                                key={p.id}
                            >
                                <h5 className="card-title">{p.title}</h5>
                                <img
                                    className="card-img-top mx-auto text-muted"
                                    src={p.image}
                                />

                                <p>{p.description}</p>
                                <div>
                                    <a href={p.link} className="card-link">
                                        <button className="button">
                                            Live Demo
                                        </button>
                                    </a>
                                    <a href={p.github} className="card-link">
                                        <button className="button2">
                                            <FiGithub />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
