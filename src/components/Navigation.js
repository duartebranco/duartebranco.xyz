import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const location = useLocation();

    const navItems = [
        { path: "/", label: " Home" },
        { path: "/about", label: " About" },
        { path: "/projects", label: " Projects" },
        { path: "/art", label: " Art" },
    ];

    return (
        <nav
            style={{
                padding: "1rem 2rem",
                borderBottom: "1px solid #7a91b0",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                    flexWrap: "wrap",
                }}
            >
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        style={{
                            color: "#f8f8ff",
                            textDecoration: "none",
                            padding: "0.5rem 1rem",
                            borderRadius: "8px",
                            backgroundColor:
                                location.pathname === item.path
                                    ? "#829cba"
                                    : "transparent",
                            transition: "background-color 0.2s ease",
                            fontSize: "1.3rem",
                            fontWeight:
                                location.pathname === item.path
                                    ? "bold"
                                    : "normal",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#7a91b0";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navigation;
