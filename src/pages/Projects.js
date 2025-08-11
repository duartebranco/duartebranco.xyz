import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const Projects = () => {
    return (
        <div
            style={{
                padding: "2rem",
                maxWidth: "1000px",
                margin: "0 auto",
            }}
        >
            <h1
                style={{
                    fontSize: "3rem",
                    margin: "0 0 3rem 0",
                    color: "#f8f8ff",
                    textAlign: "center",
                }}
            >
                My Projects
            </h1>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                }}
            >
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        to={`/projects/${project.id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <div
                            style={{
                                backgroundColor: "#9fb7d2",
                                padding: "2rem",
                                borderRadius: "16px",
                                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                                transition:
                                    "transform 0.2s ease, box-shadow 0.2s ease",
                                cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(-4px)";
                                e.currentTarget.style.boxShadow =
                                    "0 8px 32px rgba(0,0,0,0.2)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(0)";
                                e.currentTarget.style.boxShadow =
                                    "0 4px 16px rgba(0,0,0,0.1)";
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    gap: "2rem",
                                    alignItems: "flex-start",
                                }}
                            >
                                {/* Project Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: "120px",
                                        height: "80px",
                                        objectFit: "cover",
                                        borderRadius: "8px",
                                        backgroundColor: "#829cba",
                                        flexShrink: 0,
                                    }}
                                    onError={(e) => {
                                        e.target.style.backgroundColor =
                                            "#829cba";
                                        e.target.style.color = "#f8f8ff";
                                        e.target.style.display = "flex";
                                        e.target.style.alignItems = "center";
                                        e.target.style.justifyContent =
                                            "center";
                                        e.target.style.fontSize = "2rem";
                                        e.target.innerHTML = "";
                                    }}
                                />

                                {/* Project Info */}
                                <div style={{ flex: 1 }}>
                                    <h3
                                        style={{
                                            margin: "0 0 0.5rem 0",
                                            color: "#f8f8ff",
                                            fontSize: "1.5rem",
                                        }}
                                    >
                                        {project.title}
                                    </h3>

                                    <p
                                        style={{
                                            margin: "0 0 1rem 0",
                                            color: "#f8f8ff",
                                            opacity: 0.9,
                                            fontSize: "1rem",
                                            lineHeight: "1.6",
                                        }}
                                    >
                                        {project.description}
                                    </p>

                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "2rem",
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: "#f8f8ff",
                                                opacity: 0.8,
                                                fontSize: "0.9rem",
                                            }}
                                        >
                                            {project.date}
                                        </span>
                                        <span
                                            style={{
                                                color: "#f8f8ff",
                                                fontSize: "0.9rem",
                                                opacity: 0.8,
                                            }}
                                        >
                                            Click to view details
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
