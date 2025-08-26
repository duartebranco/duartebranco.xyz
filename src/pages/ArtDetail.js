import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { artworks } from "../data/artworks";

// Helper function to check localStorage for reveal state
const NSFW_REVEAL_KEY = "artworkNSFWRevealState";

const isRevealedInStorage = (artworkId) => {
    try {
        const stored = localStorage.getItem(NSFW_REVEAL_KEY);
        if (stored) {
            const revealed = JSON.parse(stored);
            return revealed.includes(artworkId);
        }
    } catch (error) {
        console.warn(
            "Failed to load NSFW reveal state from localStorage:",
            error,
        );
    }
    return false;
};

const saveRevealStateToStorage = (artworkId, isRevealed) => {
    try {
        const stored = localStorage.getItem(NSFW_REVEAL_KEY);
        let revealed = stored ? JSON.parse(stored) : [];

        if (isRevealed && !revealed.includes(artworkId)) {
            revealed.push(artworkId);
        } else if (!isRevealed && revealed.includes(artworkId)) {
            revealed = revealed.filter((id) => id !== artworkId);
        }

        localStorage.setItem(NSFW_REVEAL_KEY, JSON.stringify(revealed));
    } catch (error) {
        console.warn(
            "Failed to save NSFW reveal state to localStorage:",
            error,
        );
    }
};

const ArtDetail = () => {
    const { slug } = useParams();
    const artwork = artworks.find((a) => a.slug === slug);

    // Initialize reveal state from localStorage if NSFW, or true if not NSFW
    const [isRevealed, setIsRevealed] = useState(() => {
        if (!artwork?.isNSFW) return true;
        return isRevealedInStorage(artwork.id);
    });

    // Update reveal state and save to localStorage
    const toggleReveal = () => {
        const newRevealState = !isRevealed;
        setIsRevealed(newRevealState);
        if (artwork) {
            saveRevealStateToStorage(artwork.id, newRevealState);
        }
    };

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                    backgroundColor: "#6b8fb2",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 4px 16px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
                }}
            >
                ← Back to Gallery
            </Link>

            <div
                style={{
                    backgroundColor: "#6b8fb2",
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
                            backgroundColor: "#5d7fa3",
                        }}
                        className={
                            artwork.isNSFW && !isRevealed ? "nsfw-blur" : ""
                        }
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

                    {/* NSFW Toggle */}
                    {artwork.isNSFW && (
                        <button
                            onClick={toggleReveal}
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
                            fontSize: "1.2rem",
                            color: "#f8f8ff",
                            opacity: 0.8,
                        }}
                    >
                        {artwork.date}
                    </span>
                </div>

                <p
                    style={{
                        fontSize: "1.4rem",
                        lineHeight: "1.6",
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
