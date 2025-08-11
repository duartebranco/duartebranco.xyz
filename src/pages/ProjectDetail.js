import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return (
            <div
                style={{
                    padding: "2rem",
                    textAlign: "center",
                }}
            >
                <h1 style={{ color: "#f8f8ff" }}>Project not found </h1>
                <Link to="/projects" style={{ color: "#f8f8ff" }}>
                    ← Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div
            style={{
                padding: "2rem",
                maxWidth: "900px",
                margin: "0 auto",
            }}
        >
            {/* Back button */}
            <Link
                to="/projects"
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#f8f8ff",
                    textDecoration: "none",
                    marginBottom: "2rem",
                    padding: "0.5rem 1rem",
                    backgroundColor: "#9fb7d2",
                    borderRadius: "8px",
                    fontSize: "1rem",
                }}
            >
                ← Back to Projects
            </Link>

            <div
                style={{
                    backgroundColor: "#9fb7d2",
                    padding: "3rem",
                    borderRadius: "16px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                }}
            >
                {/* Project Image */}
                <img
                    src={project.image}
                    alt={project.title}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        objectFit: "unset",
                        borderRadius: "12px",
                        marginBottom: "2rem",
                        backgroundColor: "#829cba",
                    }}
                    onError={(e) => {
                        e.target.style.backgroundColor = "#829cba";
                        e.target.style.color = "#f8f8ff";
                        e.target.style.display = "flex";
                        e.target.style.alignItems = "center";
                        e.target.style.justifyContent = "center";
                        e.target.style.fontSize = "4rem";
                        e.target.innerHTML = "";
                    }}
                />

                <h1
                    style={{
                        fontSize: "3rem",
                        margin: "0 0 2rem 0",
                        color: "#f8f8ff",
                    }}
                >
                    {project.title}
                </h1>

                <p
                    style={{
                        fontSize: "1.2rem",
                        lineHeight: "1.8",
                        color: "#f8f8ff",
                        marginBottom: "2rem",
                    }}
                >
                    {project.fullDescription}
                </p>

                <div
                    style={{
                        backgroundColor: "#829cba",
                        padding: "1.5rem",
                        borderRadius: "12px",
                        marginBottom: "2rem",
                    }}
                >
                    <h3
                        style={{
                            margin: "0 0 1rem 0",
                            color: "#f8f8ff",
                        }}
                    >
                        Key Features
                    </h3>
                    <ul
                        style={{
                            margin: 0,
                            paddingLeft: "1.5rem",
                            color: "#f8f8ff",
                        }}
                    >
                        {project.features.map((feature, index) => (
                            <li key={index} style={{ marginBottom: "0.5rem" }}>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                    }}
                >
                    <span
                        style={{
                            color: "#f8f8ff",
                            opacity: 0.8,
                        }}
                    >
                        {project.date}
                    </span>
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: "#829cba",
                                color: "#f8f8ff",
                                padding: "0.5rem 1rem",
                                borderRadius: "8px",
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            View Demo
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: "#829cba",
                                color: "#f8f8ff",
                                padding: "0.5rem 1rem",
                                borderRadius: "8px",
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <span className="nerd-emoji"></span>GitHub Repo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
