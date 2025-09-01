import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { artworks } from "../data/artworks";

// Helper functions for localStorage
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

const Art = () => {
    const [revealedItems, setRevealedItems] = useState(() => loadRevealedFromStorage());

    // Clear localStorage only on page reload (not on navigation)
    useEffect(() => {
        // Check if this is a page reload by checking if performance.navigation.type exists
        // or use performance.getEntriesByType for newer browsers
        const isPageReload = window.performance &&
            (window.performance.getEntriesByType('navigation')[0]?.type === 'reload' ||
             window.performance.navigation?.type === 1);

        if (isPageReload) {
            clearNSFWStorage();
            setRevealedItems(new Set());
        }
    }, []);

    const toggleReveal = (id) => {
        const newRevealed = new Set(revealedItems);
        newRevealed.add(id); // Only add, never remove (no hide functionality)
        setRevealedItems(newRevealed);
        saveRevealedToStorage(newRevealed);
    };

    return (
        <div
            style={{
                padding: "2rem",
                maxWidth: "1200px",
                margin: "0 auto",
            }}
        >
            <h1
                style={{
                    fontSize: "3rem",
                    margin: "0 0 1rem 0",
                    color: "#f8f8ff",
                    textAlign: "center",
                }}
            >
                My Art
            </h1>

            <p
                style={{
                    fontSize: "1.4rem",
                    margin: "0 0 3rem 0",
                    color: "#f8f8ff",
                    textAlign: "center",
                    opacity: 0.9,
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                A collection of my drawings and sketches, all made with charcoal
                and graphite.
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "2rem",
                }}
            >
                {artworks.map((artwork) => (
                    <div key={artwork.id} style={{ position: "relative" }}>
                        <Link
                            to={`/art/${artwork.slug}`}
                            style={{ textDecoration: "none", display: "block" }}
                        >
                            <div
                                style={{
                                    backgroundColor: "#6b8fb2",
                                    borderRadius: "16px",
                                    overflow: "hidden",
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
                                {/* Art Image */}
                                <div style={{ position: "relative" }}>
                                    <img
                                        src={artwork.image}
                                        alt={artwork.title}
                                        style={{
                                            width: "100%",
                                            height: "350px",
                                            objectFit: "cover",
                                            backgroundColor: "#5d7fa3",
                                        }}
                                        className={
                                            artwork.isNSFW &&
                                            !revealedItems.has(artwork.id)
                                                ? "nsfw-blur"
                                                : ""
                                        }
                                        onError={(e) => {
                                            e.target.style.backgroundColor =
                                                "#5d7fa3";
                                            e.target.style.color = "#f8f8ff";
                                            e.target.style.display = "flex";
                                            e.target.style.alignItems =
                                                "center";
                                            e.target.style.justifyContent =
                                                "center";
                                            e.target.style.fontSize = "3rem";
                                            e.target.innerHTML = "";
                                        }}
                                    />

                                    {/* NSFW Toggle - Only show when not revealed */}
                                    {artwork.isNSFW && !revealedItems.has(artwork.id) && (
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
                                            }}
                                        >
                                            <span
                                                style={{
                                                    color: "rgba(130, 156, 186, 0.95)",
                                                    fontSize: "1.4rem",
                                                    fontWeight: "600",
                                                }}
                                            >
                                                NSFW
                                            </span>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    toggleReveal(artwork.id);
                                                }}
                                                style={{
                                                    backgroundColor:
                                                        "rgba(130, 156, 186, 0.95)",
                                                    color: "#f8f8ff",
                                                    border: "none",
                                                    padding: "1rem 2rem",
                                                    borderRadius: "25px",
                                                    fontSize: "1.1rem",
                                                    fontWeight: "600",
                                                    cursor: "pointer",
                                                    backdropFilter: "blur(10px)",
                                                    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
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

                                {/* Art Info */}
                                <div style={{ padding: "1.5rem" }}>
                                    <h3
                                        style={{
                                            margin: "0 0 0.5rem 0",
                                            color: "#f8f8ff",
                                            fontSize: "1.5rem",
                                        }}
                                    >
                                        {artwork.title}
                                    </h3>

                                    <p
                                        style={{
                                            margin: "0 0 1rem 0",
                                            color: "#f8f8ff",
                                            opacity: 0.9,
                                            fontSize: "1.2rem",
                                        }}
                                    >
                                        {artwork.description}
                                    </p>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: "#f8f8ff",
                                                opacity: 0.8,
                                                fontSize: "0.85rem",
                                            }}
                                        >
                                            {artwork.date}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Art;
