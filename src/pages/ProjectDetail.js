import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

// Helper function to render text with bold formatting and links
const renderFormattedText = (text) => {
    // First, split by bold patterns
    const boldParts = text.split(/(\*\*.*?\*\*)/g);

    return boldParts.map((boldPart, boldIndex) => {
        if (boldPart.startsWith("**") && boldPart.endsWith("**")) {
            // Handle bold text
            const boldText = boldPart.slice(2, -2);

            // Check if the bold text contains links
            const linkParts = boldText.split(/(\[.*?\]\(.*?\))/g);
            return (
                <strong
                    key={boldIndex}
                    style={{
                        color: "#2B6CB0",
                    }}
                >
                    {linkParts.map((linkPart, linkIndex) => {
                        const linkMatch = linkPart.match(/\[(.*?)\]\((.*?)\)/);
                        if (linkMatch) {
                            return (
                                <a
                                    key={linkIndex}
                                    href={linkMatch[2]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "#2B6CB0",
                                        textDecoration: "underline",
                                    }}
                                >
                                    {linkMatch[1]}
                                </a>
                            );
                        }
                        return linkPart;
                    })}
                </strong>
            );
        } else {
            // Handle regular text (may contain links)
            const linkParts = boldPart.split(/(\[.*?\]\(.*?\))/g);
            return linkParts.map((linkPart, linkIndex) => {
                const linkMatch = linkPart.match(/\[(.*?)\]\((.*?)\)/);
                if (linkMatch) {
                    return (
                        <a
                            key={`${boldIndex}-${linkIndex}`}
                            href={linkMatch[2]}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "#2B6CB0",
                                textDecoration: "underline",
                            }}
                        >
                            {linkMatch[1]}
                        </a>
                    );
                }
                return linkPart;
            });
        }
    });
};

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        <div className="project-details-container">
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
                    backgroundColor: "#6b8fb2",
                    borderRadius: "8px",
                    fontSize: "1rem",
                }}
            >
                ← Back to Projects
            </Link>

            <div className="project-details-inside">
                {/* Project Image */}
                {project.image && (
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "unset",
                            borderRadius: "12px",
                            marginBottom: "2rem",
                            backgroundColor: "#5d7fa3",
                        }}
                        onError={(e) => {
                            e.target.style.backgroundColor = "#5d7fa3";
                            e.target.style.color = "#f8f8ff";
                            e.target.style.display = "flex";
                            e.target.style.alignItems = "center";
                            e.target.style.justifyContent = "center";
                            e.target.style.fontSize = "4rem";
                            e.target.innerHTML = "";
                        }}
                    />
                )}

                <h1
                    style={{
                        fontSize: "3rem",
                        margin: "0 0 2rem 0",
                        color: "#f8f8ff",
                    }}
                >
                    {project.title}
                </h1>

                <div style={{ marginBottom: "2rem" }}>
                    {Array.isArray(project.fullDescription) ? (
                        project.fullDescription.map((paragraph, index) => (
                            <p
                                key={index}
                                style={{
                                    fontSize: "1.4rem",
                                    lineHeight: "1.6",
                                    color: "#f8f8ff",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                {renderFormattedText(paragraph.text)}
                            </p>
                        ))
                    ) : (
                        <p
                            style={{
                                fontSize: "1.2rem",
                                lineHeight: "1.6",
                                color: "#f8f8ff",
                                marginBottom: "2rem",
                            }}
                        >
                            {project.fullDescription}
                        </p>
                    )}
                </div>

                {project.features && (
                    <div
                        style={{
                            backgroundColor: "#5d7fa3",
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
                            Features
                        </h3>
                        <ul
                            style={{
                                margin: 0,
                                paddingLeft: "1.5rem",
                                color: "#f8f8ff",
                            }}
                        >
                            {project.features.map((feature, index) => (
                                <li
                                    key={index}
                                    style={{ marginBottom: "0.5rem" }}
                                >
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.stack && (
                    <div
                        style={{
                            backgroundColor: "#5d7fa3",
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
                            Tech Used
                        </h3>
                        <ul
                            style={{
                                margin: 0,
                                paddingLeft: "1.5rem",
                                color: "#f8f8ff",
                            }}
                        >
                            {project.stack.map((feature, index) => (
                                <li
                                    key={index}
                                    style={{ marginBottom: "0.5rem" }}
                                >
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

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
                    {project.githubStars && (
                        <span
                            style={{
                                color: "#f8f8ff",
                                opacity: 0.8,
                            }}
                        >
                            <span className="nerd-emoji"></span>{" "}
                            {project.githubStars} stars
                        </span>
                    )}
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: "#5d7fa3",
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
                                backgroundColor: "#5d7fa3",
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
