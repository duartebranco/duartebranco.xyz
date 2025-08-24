import React from "react";
import { Link } from "react-router-dom";
import { projects, projectCategories } from "../data/projects";

const Projects = () => {
    // Group projects by category
    const groupedProjects = projects.reduce((groups, project) => {
        const category = project.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(project);
        return groups;
    }, {});

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

            {Object.entries(groupedProjects).map(
                ([categoryKey, categoryProjects]) => {
                    const categoryInfo = projectCategories[categoryKey];

                    return (
                        <div key={categoryKey} style={{ marginBottom: "4rem" }}>
                            {/* Category Header */}
                            <div style={{ marginBottom: "2rem" }}>
                                <h2
                                    style={{
                                        fontSize: "2rem",
                                        margin: "0 0 0.5rem 0",
                                        color: "#f8f8ff",
                                        borderBottom: "2px solid #6b8fb2",
                                        paddingBottom: "0.5rem",
                                    }}
                                >
                                    {categoryInfo.title}
                                </h2>
                                <p
                                    style={{
                                        color: "#f8f8ff",
                                        opacity: 0.8,
                                        fontSize: "1.4rem",
                                        margin: "0",
                                    }}
                                >
                                    {categoryInfo.description}
                                </p>
                            </div>

                            {/* Projects in this category */}
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "2rem",
                                }}
                            >
                                {categoryProjects.map((project) => (
                                    <Link
                                        key={project.id}
                                        to={`/projects/${project.slug}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <div
                                            style={{
                                                backgroundColor: "#6b8fb2",
                                                padding: "2rem",
                                                borderRadius: "16px",
                                                boxShadow:
                                                    "0 4px 16px rgba(0,0,0,0.1)",
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
                                                className="project-card-content"
                                            >
                                                {/* Project Image */}
                                                {project.image && (
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        style={{
                                                            width: "120px",
                                                            height: "80px",
                                                            objectFit: "cover",
                                                            borderRadius: "8px",
                                                            backgroundColor:
                                                                "#5d7fa3",
                                                            flexShrink: 0,
                                                        }}
                                                        onError={(e) => {
                                                            e.target.style.backgroundColor =
                                                                "#5d7fa3";
                                                            e.target.style.color =
                                                                "#f8f8ff";
                                                            e.target.style.display =
                                                                "flex";
                                                            e.target.style.alignItems =
                                                                "center";
                                                            e.target.style.justifyContent =
                                                                "center";
                                                            e.target.style.fontSize =
                                                                "2rem";
                                                            e.target.innerHTML =
                                                                "";
                                                        }}
                                                    />
                                                )}

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
                                                            fontSize: "1.3rem",
                                                            lineHeight: "1.6",
                                                        }}
                                                    >
                                                        {project.description}
                                                    </p>

                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            gap: "2rem",
                                                            fontSize: "1.2rem",
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
                                                        {project.githubStars && (
                                                            <span
                                                                style={{
                                                                    color: "#f8f8ff",
                                                                    opacity: 0.8,
                                                                }}
                                                            >
                                                                <span className="nerd-emoji">
                                                                    
                                                                </span>{" "}
                                                                {
                                                                    project.githubStars
                                                                }{" "}
                                                                stars
                                                            </span>
                                                        )}
                                                        <span
                                                            style={{
                                                                color: "#f8f8ff",
                                                                opacity: 0.8,
                                                            }}
                                                        >
                                                            Click to view
                                                            details
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
                },
            )}
        </div>
    );
};

export default Projects;
