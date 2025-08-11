import React, { useState } from "react";
import { Link } from "react-router-dom";
import { artworks } from "../data/artworks";

const Art = () => {
    const [revealedItems, setRevealedItems] = useState(new Set());

    const toggleReveal = (id) => {
        const newRevealed = new Set(revealedItems);
        if (newRevealed.has(id)) {
            newRevealed.delete(id);
        } else {
            newRevealed.add(id);
        }
        setRevealedItems(newRevealed);
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
                    margin: "0 0 3rem 0",
                    color: "#f8f8ff",
                    textAlign: "center",
                }}
            >
                My Art
            </h1>

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
                            to={`/art/${artwork.id}`}
                            style={{ textDecoration: "none", display: "block" }}
                        >
                            <div
                                style={{
                                    backgroundColor: "#9fb7d2",
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
                                            height: "250px",
                                            objectFit: "cover",
                                            backgroundColor: "#829cba",
                                        }}
                                        className={
                                            artwork.isNSFW &&
                                            !revealedItems.has(artwork.id)
                                                ? "nsfw-blur"
                                                : ""
                                        }
                                        onError={(e) => {
                                            e.target.style.backgroundColor =
                                                "#829cba";
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

                                    {/* NSFW Toggle */}
                                    {artwork.isNSFW && (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                toggleReveal(artwork.id);
                                            }}
                                            style={{
                                                position: "absolute",
                                                top: "1rem",
                                                right: "1rem",
                                                backgroundColor:
                                                    "rgba(130, 156, 186, 0.9)",
                                                color: "#f8f8ff",
                                                border: "none",
                                                padding: "0.5rem 1rem",
                                                borderRadius: "20px",
                                                fontSize: "0.9rem",
                                                cursor: "pointer",
                                                backdropFilter: "blur(10px)",
                                            }}
                                        >
                                            {revealedItems.has(artwork.id)
                                                ? " Hide"
                                                : " View"}
                                        </button>
                                    )}
                                </div>

                                {/* Art Info */}
                                <div style={{ padding: "1.5rem" }}>
                                    <h3
                                        style={{
                                            margin: "0 0 0.5rem 0",
                                            color: "#f8f8ff",
                                            fontSize: "1.3rem",
                                        }}
                                    >
                                        {artwork.title}
                                    </h3>

                                    <p
                                        style={{
                                            margin: "0 0 1rem 0",
                                            color: "#f8f8ff",
                                            opacity: 0.9,
                                            fontSize: "0.95rem",
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
