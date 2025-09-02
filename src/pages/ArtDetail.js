import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { artworks } from "../data/artworks";
import ImageZoomModal from "../components/ImageZoomModal";

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

// Helper function for localStorage management
const NSFW_REVEAL_KEY = "artworkNSFWRevealState";

const loadRevealedFromStorage = () => {
    try {
        const stored = localStorage.getItem(NSFW_REVEAL_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            return new Set(parsed);
        }
    } catch (error) {
        console.warn(
            "Failed to load NSFW reveal state from localStorage:",
            error,
        );
    }
    return new Set();
};

const saveRevealedToStorage = (revealedSet) => {
    try {
        localStorage.setItem(NSFW_REVEAL_KEY, JSON.stringify([...revealedSet]));
    } catch (error) {
        console.warn(
            "Failed to save NSFW reveal state to localStorage:",
            error,
        );
    }
};

const clearNSFWStorage = () => {
    try {
        localStorage.removeItem(NSFW_REVEAL_KEY);
    } catch (error) {
        console.warn("Failed to clear NSFW reveal state from localStorage:", error);
    }
};

const ArtDetail = () => {
    const { slug } = useParams();
    const artwork = artworks.find((a) => a.slug === slug);

    // Load reveal state from localStorage, preserving gallery state
    const [revealedItems, setRevealedItems] = useState(() => loadRevealedFromStorage());
    
    // Modal state for zoom
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Check if this specific artwork is revealed
    const isRevealed = !artwork?.isNSFW || revealedItems.has(artwork?.id);

    // Update reveal state (only reveal, no hide)
    const toggleReveal = () => {
        if (artwork) {
            const newRevealed = new Set(revealedItems);
            newRevealed.add(artwork.id);
            setRevealedItems(newRevealed);
            saveRevealedToStorage(newRevealed);
        }
    };

    // Handle back button click - clear localStorage
    const handleBackClick = () => {
        clearNSFWStorage();
    };

    // Handle image click to open modal
    const handleImageClick = () => {
        if (isRevealed) {
            setIsModalOpen(true);
        }
    };

    // Handle modal close
    const handleModalClose = () => {
        setIsModalOpen(false);
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
        <div className="art-details-container">
            {/* Back button */}
            <Link
                to="/art"
                onClick={handleBackClick}
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

            <div className="art-details-inside">
                {/* Art Image - Click to open modal */}
                <div style={{ position: "relative", marginBottom: "2rem" }}>
                    <img
                        src={artwork.image}
                        alt={artwork.title}
                        onClick={handleImageClick}
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "unset",
                            borderRadius: "12px",
                            backgroundColor: "#5d7fa3",
                            cursor: isRevealed ? "pointer" : "default",
                            transition: "transform 0.2s ease",
                        }}
                        className={
                            artwork.isNSFW && !isRevealed ? "nsfw-blur" : ""
                        }
                        onMouseEnter={(e) => {
                            if (isRevealed) {
                                e.target.style.transform = "scale(1.02)";
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (isRevealed) {
                                e.target.style.transform = "scale(1)";
                            }
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

                    {/* Click to zoom indicator */}
                    {isRevealed && (
                        <div
                            style={{
                                position: "absolute",
                                bottom: "12px",
                                right: "12px",
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                                color: "#f8f8ff",
                                padding: "6px 12px",
                                borderRadius: "20px",
                                fontSize: "0.85rem",
                                fontWeight: "500",
                                opacity: 0.8,
                                pointerEvents: "none",
                                transition: "opacity 0.2s ease",
                            }}
                        >
                            🔍 Click to zoom
                        </div>
                    )}

                    {/* NSFW Toggle - Only show when not revealed */}
                    {artwork.isNSFW && !isRevealed && (
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "0.5rem",
                                zIndex: 20,
                            }}
                        >
                            <span
                                style={{
                                    color: "rgba(130, 156, 186, 0.95)",
                                    fontSize: "1.6rem",
                                    fontWeight: "600",
                                    textShadow: "0 2px 4px rgba(0,0,0,0.4)",
                                }}
                            >
                                NSFW
                            </span>
                            <button
                                onClick={toggleReveal}
                                style={{
                                    backgroundColor: "rgba(130, 156, 186, 0.95)",
                                    color: "#f8f8ff",
                                    border: "none",
                                    padding: "1.2rem 2.5rem",
                                    borderRadius: "30px",
                                    fontSize: "1.2rem",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    backdropFilter: "blur(10px)",
                                    boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                                    transition: "all 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "rgba(130, 156, 186, 1)";
                                    e.target.style.transform = "scale(1.05)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "rgba(130, 156, 186, 0.95)";
                                    e.target.style.transform = "scale(1)";
                                }}
                            >
                                View
                            </button>
                        </div>
                    )}
                </div>

                {/* Zoom Modal */}
                <ImageZoomModal 
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    imageUrl={artwork.image}
                    imageAlt={artwork.title}
                />

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
                    {renderFormattedText(artwork.fullDescription)}
                </p>
            </div>
        </div>
    );
};

export default ArtDetail;
