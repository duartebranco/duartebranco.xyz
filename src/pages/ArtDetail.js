import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { artworks } from "../data/artworks";

const ArtDetail = () => {
    const { id } = useParams();
    const artwork = artworks.find((a) => a.id === parseInt(id));
    const [isRevealed, setIsRevealed] = useState(!artwork?.isNSFW);

    if (!artwork) {
        return (
            <div
                style={{
                    padding: "2rem",
                    textAlign: "center",
                }}
            >
                <h1 style={{ color: "#f8f8ff" }}>Artwork not found </h1>
                <Link to="/art" style={{ color: "#f8f8ff" }}>
                    ← Back to Art Gallery
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
                to="/art"
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
                ← Back to Gallery
            </Link>

            <div
                style={{
                    backgroundColor: "#9fb7d2",
                    padding: "3rem",
                    borderRadius: "16px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                }}
            >
                {/* Art Image */}
                <div style={{ position: "relative", marginBottom: "2rem" }}>
                    <img
                        src={artwork.image}
                        alt={artwork.title}
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "unset",
                            borderRadius: "12px",
                            backgroundColor: "#829cba",
                        }}
                        className={
                            artwork.isNSFW && !isRevealed ? "nsfw-blur" : ""
                        }
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

                    {/* NSFW Toggle */}
                    {artwork.isNSFW && (
                        <button
                            onClick={() => setIsRevealed(!isRevealed)}
                            style={{
                                position: "absolute",
                                top: "1rem",
                                right: "1rem",
                                backgroundColor: "rgba(130, 156, 186, 0.9)",
                                color: "#f8f8ff",
                                border: "none",
                                padding: "0.8rem 1.5rem",
                                borderRadius: "20px",
                                fontSize: "1rem",
                                cursor: "pointer",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            {isRevealed ? " Hide" : " View"}
                        </button>
                    )}
                </div>

                <h1
                    style={{
                        fontSize: "3rem",
                        margin: "0 0 2rem 0",
                        color: "#f8f8ff",
                    }}
                >
                    {artwork.title}
                </h1>

                <div
                    style={{
                        marginBottom: "2rem",
                    }}
                >
                    <span
                        style={{
                            color: "#f8f8ff",
                            opacity: 0.8,
                        }}
                    >
                        {artwork.date}
                    </span>
                </div>

                <p
                    style={{
                        fontSize: "1.2rem",
                        lineHeight: "1.8",
                        color: "#f8f8ff",
                        marginBottom: "2rem",
                    }}
                >
                    {artwork.fullDescription}
                </p>
            </div>
        </div>
    );
};

export default ArtDetail;
